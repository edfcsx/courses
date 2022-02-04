import { Injectable, Injector } from '@angular/core';
import { Entry } from './entry.model';
import { BaseResourceService } from '../../../shared/services/base-resource.service';
import { CategoryService } from './../../categories/shared/category.service';
import { Observable } from 'rxjs';
import { flatMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntryService extends BaseResourceService<Entry> {
  constructor(
    private categoryService: CategoryService,
    protected injector: Injector,
  ) {
    super('api/entries', injector, Entry.fromJson);
  }

  create(entry: Entry): Observable<Entry> {
    return this.setCategoryAndSendToServer(entry, super.create.bind(this));
  }

  update(entry: Entry): Observable<Entry> {
    return this.setCategoryAndSendToServer(entry, super.update.bind(this));
  }

  setCategoryAndSendToServer(entry: Entry, sendFn: any): Observable<Entry> {
    return this.categoryService.getById(entry.categoryId).pipe(
      flatMap((category) => {
        entry.category = category;
        return sendFn(entry) as Observable<Entry>;
      }),
      catchError(this.handleError)
    );
  }
}
