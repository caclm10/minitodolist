<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

    <title inertia>{{ config('app.name', 'Mini ToDoList') }}</title>
    <meta name="description" content="Just a simple and minimalistic To-Do List App.">

    @viteReactRefresh
    @vite('resources/js/app.jsx')

    @inertiaHead
</head>

<body class="min-h-dvh antialiased font-sans">
    @inertia
</body>

</html>
