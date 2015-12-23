<html>
        <head>

        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" rel="stylesheet">
        <!-- Include roboto.css to use the Roboto web font, material.css to include the theme and ripples.css to style the ripple effect -->
        <link href="<?php echo base_url("assets/css/roboto.min.css"); ?>" rel="stylesheet">
        <link href="<?php echo base_url("assets/css/material.min.css"); ?>" rel="stylesheet">
        <link href="<?php echo base_url("assets/css/ripples.min.css"); ?>" rel="stylesheet">
		
		
    </head>

    <body>

        

        <h1>BryanRam's Stuff</h1>
		<!-- Navigation bar -->
		
		<div class="navbar navbar-default">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand active" href="/">Home<div class="ripple-wrapper"></div></a>
                </div>
                <div class="navbar-collapse collapse navbar-responsive-collapse">
                  <ul class="nav navbar-nav">
                    <li><a href="javascript:void(0)">About<div class="ripple-wrapper"></div></a></li>
                    <li><a href="javascript:void(0)">Web Projects<div class="ripple-wrapper"></div></a></li>
                    <li class="dropdown">
                      <a href="javascript:void(0)" data-target="#" class="dropdown-toggle" data-toggle="dropdown">Games <b class="caret"></b></a>
                      <ul class="dropdown-menu">
                        <li><a href="/Games/Builds">SpaceShooter</a></li>
                        <li><a href="/Games/RogueLikeWeb">RogueLike</a></li>
                        
                       <!-- <li class="divider"></li>
                        <li class="dropdown-header">Dropdown header</li>
                        <li><a href="javascript:void(0)">Separated link</a></li>
                        <li><a href="javascript:void(0)">One more separated link</a></li> -->
                      </ul>
                    </li>
                  </ul>
                  <!--<form class="navbar-form navbar-left">
                    <input type="text" class="form-control col-lg-8" placeholder="Search">
                  </form>
                  <ul class="nav navbar-nav navbar-right">
                    <li><a href="javascript:void(0)">Link</a></li>
                    <li class="dropdown">
                      <a href="http://fezvrasta.github.io/bootstrap-material-design/bootstrap-elements.html" data-target="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                      <ul class="dropdown-menu">
                        <li><a href="javascript:void(0)">Action</a></li>
                        <li><a href="javascript:void(0)">Another action</a></li>
                        <li><a href="javascript:void(0)">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="javascript:void(0)">Separated link</a></li>
                      </ul>
                    </li>
                  </ul> -->
                </div>
        </div>

                <h1><?php echo $title; ?></h1>