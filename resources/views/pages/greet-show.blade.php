@extends('templates.page')
@section('content')

<div class="grid grid-cols-1 md:grid-cols-2 px-3 md:px-0 py-6 md:py-20 gap-6 md:items-center">
   <div class="grid__col">
      <header class="mb-4">
         <h1 class="mb-3 text-3xl font-bold">Hi {{ $msg->receipent_name }},</h1>
         <div class="flex items-center gap-2">
            <div>
               Your gift with message
            </div>
         </div>
      </header>
   </div>
   <div class="grid__col">
      @if ($msg->attachment_url)
      <img src="{{ $msg->attachment_url }}" alt="" class="w-full rounded-xl" />
      @else

      @endif
   </div>
</div>

@endsection
