@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h1>insercao de restaurantes</h1>
                <hr/>
                    <form action="{{route('restaurant.store')}}" method="post" class="form-group">
                        {{csrf_field()}}
                        <p>
                            <label>Nome do restaurante:</label>
                            <input type="text" name="name" value="{{old('name')}}" class="form-control @if($errors->has('name')) is-invalid @endif">
                            @if ($errors->has('name'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('name') }}</strong>
                                </span>
                            @endif
                        </p>

                        <p>
                            <label>Endereco:</label>
                            <input type="text" name="address" value="{{old('address')}}" class="form-control @if($errors->has('address')) is-invalid @endif">
                            @if ($errors->has('address'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('address') }}</strong>
                                </span>
                            @endif
                        </p>

                        <p>
                            <label>Fale um pouco sobre o restaurante:</label><br/>
                            <textarea name="description" cols="50" rows="10" class="form-control @if($errors->has('description')) is-invalid @endif">{{old('description')}}</textarea>
                            @if ($errors->has('description'))
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $errors->first('description') }}</strong>
                                </span>
                            @endif
                        </p>
                        <input type="submit" value="Cadastrar Restaurante" class="btn btn-info">
                    </form>
            </div>
        </div>
    </div>
@endsection