<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content= "{{ csrf_token() }}" >
        <script>window.Laravel= { csrfToken: "{{csrf_token()}}" }</script>
        <title>Goldmedia Data Viewer</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
              integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
              crossorigin="anonymous">


        <!-- Styles -->
        <style>

            body {
                height: 100%;
                margin: 0;
                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            }

            html {
                height: 100%;
            }

        </style>

        <script type="text/javascript" src="https://public.tableau.com/javascripts/api/tableau-2.min.js"></script>
        <script src="https://online.tableau.com/javascripts/api/tableau-2.min.js"></script>
        <script type='text/javascript' src='https://eu-west-1a.online.tableau.com/javascripts/api/viz_v1.js'></script>
    </head>
    <body>
            <div class="content">

                <div id="app">
                    <home1></home1>
                </div>
            </div>


            <script src="{{ asset('js/app.js') }}"></script>


    </body>
</html>
