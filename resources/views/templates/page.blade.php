<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>{{ config("pages.greet.title") }}</title>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" referrerpolicy="no-referrer" />
   <style>
      .container {
         max-width: 1100px;
      }
   </style>
</head>
<body class="pt-20 flex flex-col min-h-screen">
   @include('includes.navbar')
   {{-- <x-auth-validation-errors :errors="$errors" /> --}}
   <div class="container mx-auto flex-1">
      @yield('content')
   </div>
   @include('includes.footer')

</body>
</html>
