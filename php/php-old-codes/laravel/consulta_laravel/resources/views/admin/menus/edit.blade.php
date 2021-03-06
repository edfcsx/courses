@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h1>Edição de restaurantes</h1>
                <hr/>
                <form action="{{route('menu.update', ['id' => $menu->id])}}" method="post" class="form-group">
                    {{csrf_field()}}

                    <p>
                        <label>Nome do Item:</label>
                        <input type="text" name="name" value="{{$menu->name}}" class="form-control @if($errors->has('name')) is-invalid @endif">
                        @if ($errors->has('name'))
                            <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('name') }}</strong>
                                </span>
                        @endif
                    </p>

                    <p>
                        <label>Preço:</label>
                        <input type="text" name="price" value="{{$menu->price}}" class="form-control @if($errors->has('price')) is-invalid @endif">
                        @if ($errors->has('price'))
                            <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('price') }}</strong>
                                </span>
                        @endif
                    </p>

                    <p>
                        <label>Selecione um restaurante para alterar o item:</label>
                        <select name="restaurant_id" class="form-control">
                            @foreach($restaurant as $r)
                                <option value="{{$r->id}}"
                                @if($menu->restaurant->id == $r->id)
                                    selected
                                @endif
                                    >{{$r->name}}</option>
                            @endforeach
                        </select>
                        @if ($errors->has('restaurant_id'))
                            <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('restaurant_id') }}</strong>
                                </span>
                        @endif
                    </p>

                    <input type="submit" value="Alterar Menu" class="btn btn-info">
                </form>
            </div>
        </div>
    </div>
    @endsection