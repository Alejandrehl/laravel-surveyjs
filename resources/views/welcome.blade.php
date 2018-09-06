<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Bootstrap CSS -->
        <link href="{{ asset('template_assets/css/bootstrap.min.css') }}" rel="stylesheet">
        <!-- Datatable CSS -->
        <link href="{{ asset('template_assets/css/datatables.min.css') }}" rel="stylesheet">
        <!-- Jquery-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <!-- Bootstrap JS -->
        <script src="{{ asset('template_assets/js/bootstrap.js') }}"></script>
        <script src="{{ asset('template_assets/js/bootstrap.min.js') }}"></script>
        <!-- Datatable JS -->
        <script src="{{ asset('template_assets/js/datatables.min.js') }}"></script>
        <!-- Survey JS -->
        <script src="https://surveyjs.azureedge.net/1.0.39/survey.jquery.js"></script>
        <link href="https://surveyjs.azureedge.net/1.0.39/survey.css" type="text/css" rel="stylesheet"/>

        <!-- Axios -->
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

    </head>
    <body>

        <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="campanas">Campañas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Instrumentos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Notificaciones</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="row">
            <div class="col-md-1 order-md-1"></div>
            <div class="col-md-10 order-md-1">
                <div id="surveyElement"></div>
                <div id="surveyResult"></div>
            </div>
        </div>

        <script type="text/javascript" src="{{ asset('template_assets/js/index.js') }}"></script>
    </body>
</html>
