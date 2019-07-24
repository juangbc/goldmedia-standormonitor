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

            .content {
                height: 100%;
            }

        </style>
        <script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>
        <script src='https://code.jquery.com/jquery-2.2.4.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js'></script>
        <script src='https://cdn.jsdelivr.net/alasql/0.3/alasql.min.js'></script>
        <script src="https://online.tableau.com/javascripts/api/tableau-2.min.js"></script>
    </head>
    <body>
            <div class="content">

                <div id="app">
                    <app></app>
                </div>
            </div>

            <script src="{{ asset('js/app.js') }}"></script>

    </body>
</html>
