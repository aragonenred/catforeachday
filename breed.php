<?php include_once('includes/templates/header.php');?>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
    <script src="lib/skillset/js/skillset.js"></script>
</head>
<body>
    <header>
        <div hidden id='breed_q'><?php echo $_GET['q']; ?></div>
        <a  href="breeds.php" id="btn-more" >Go back </a>
    </header>
    <main>    
        <div class="breed-box">
            <h1 id="breed_name">European Asshole</h1>
            <p id="breed_origin">Argentina</p>
            <div class='imagen'>
                <img id='breed_img' src="img/hBXicehMA.jpg" alt="">
            </div>
            <p id="breed_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequuntur voluptas velit provident ducimus, atque consectetur nesciunt facilis quis pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus esse, eveniet atque possimus vero ratione incidunt illo nemo quis provident!</p>
            
            <div id="skillset"></div>
    
            <a href="#" id="breed_wiki"> <i class="fab fa-wikipedia-w"></i>see more</a>
        </div>           
    </main>
    <?php include_once('includes/templates/footer.php');?>