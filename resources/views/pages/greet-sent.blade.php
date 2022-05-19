@extends('templates.page')
@section('content')

<div class="grid grid-cols-1 md:grid-cols-2 px-3 md:px-0 py-6 md:py-20 gap-6 md:items-center">
   <div class="grid__col">
      <header class="mb-4">
         <h1 class="mb-3 text-3xl font-bold">Hi customer name,</h1>
         <div class="flex items-center gap-2">
            <div>
               <svg xmlns="http://www.w3.org/2000/svg" class="text-green-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
            </div>
            <div>
               Your message is sent successfuly.
            </div>
         </div>
      </header>
   </div>
   <div class="grid__col">
      <img src="//unsplash.it/600/400" alt="" class="w-full rounded-xl" />
   </div>
</div>

@endsection
