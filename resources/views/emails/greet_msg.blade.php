<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Greet msg</title>
    <style>
        *{
            padding: 0px;
            margin: 0px;
        }
        .container{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;     
        }
        .heading{
            padding-left: 200px;
            font-size: 2em;
            margin-bottom: 13px;
            text-decoration: underline;
            padding-bottom: 5px;
        }
        .row{
            min-width: 600px;
            min-height: 600px;
            display: block;
            margin: auto;   
        }
        .gift-card{
            display: flex;
            flex-direction: column; 
            justify-content: center;
            align-items: center;
            /* background-image: url('https://cdn.pixabay.com/photo/2017/04/10/19/56/purple-2219594_960_720.jpg'); */
            /* background: linear-gradient( pink,blueviolet) , url('https://cdn.pixabay.com/photo/2017/04/10/19/56/purple-2219594_960_720.jpg'); */
            /* opacity: 0.5; */
            /* background-color: black; */
            /* background-image: url('https://cdn.pixabay.com/photo/2017/04/10/19/56/purple-2219594_960_720.jpg'); */
            /* background-color: #ffffff83; */
            /* background-blend-mode: screen; */
            border: 20px solid;  
            /* background: url('https://cdn.pixabay.com/photo/2017/04/10/19/56/purple-2219594_960_720.jpg')  ; */
            border-image: url('https://cdn.pixabay.com/photo/2017/04/10/19/56/purple-2219594_960_720.jpg') 30 round;
        }
        .gift-card:last-child{
            padding-top: 40px;
            padding-bottom: 40px;
        }
        .gift-card-para{
            font-style: italic;
            color: blueviolet;
            z-index: 999;
            font-weight: bolder;
            /* color: white; */
            
            
        }
        .gift-card-h3{
            font-size: 2em;
            padding-top: 30px;
            z-index: 99999999;
            /* color: white; */
        }
        #gift-card-price{
            font-size: 130px;
            margin: -20px 0px;
            font-weight: 100;
            z-index: 99999999;
            /* color: white; */
        }
        .gift-card-spending{
            font-size: 13px;    
            margin: 20px 0px;
            /* color: white; */
        }
        .gift-card-thanking{
            font-size: 11px;
            /* color: white; */
        }   
    </style>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="heading">
                <h3>GIFT CARD</h3>
            </div>
            <div class="gift-card">
                <p class="gift-card-para">spring is finally here</p>
                <p class="gift-card-para">Celebrate the arrival of the new designer</p>
                <p class="gift-card-para">SS15 collections with us</p>
                <h3 class="gift-card-h3">GIFT CARD</h3>
                <h1 class="gift-card-price" id="gift-card-price">$50</h1>
                <small class="gift-card-code">Code: 2015spring</small>
                <p class="gift-card-spending">WHEN YOU SPEND $300 AND OVER</p>
                <small class="gift-card-thanking">WITH LOVE</small>
                <small class="gift-card-thanking">YOUR TEAM</small>
            </div>
        </div>
    </div>
</body>
</html>