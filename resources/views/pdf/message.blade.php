<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title></title>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" referrerpolicy="no-referrer" />
</head>
<body>
   <div style="text-align: center; margin: 1.5rem auto;">

      <h1 class="mb-4 leading-10 text-3xl font-bold">Hey, Customer {{ $message->receipent_name }}</h1>
      <div class="mb-8">
         <p class="mb-4">
            Glee & Glint wishes you a very Happy Birthday.
         </p>
         <p class="mb-4">
            Here's a special message for you {{ $message->receipent_name }}
         </p>
         <p class="mb-4">
            Scan the QR code below
         </p>
      </div>
      <div>
         <img src="data:image/svg;base64, {!! base64_encode(QrCode::format('svg')->size(240)->generate(route('greet.show', $message->uuid))) !!} ">
      </div>
   </div>
</body>
</html>
