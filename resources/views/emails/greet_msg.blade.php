@component('mail::message')
#Hey, Customer {{ $msg->receipent_name }}

Glee & Glint wishes you a very Happy Birthday.

Here's a special message for you {{ $msg->receipent_name }}

Scan the QR code below

<p>
   <img src="data:image/svg;base64, {!! base64_encode(QrCode::format('svg')->size(240)->generate(route('greet.show', $msg->uuid))) !!} ">
</p>

@component('mail::button', ['url' => route('greet.show', $msg->uuid)])
View Message
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
