jQuery(document).ready(function($){
	var gallery = $('.cd-gallery'),
		foldingPanel = $('.cd-folding-panel'),
		mainContent = $('.cd-main');
	/* open folding content */
	gallery.on('click', 'a', function(event){
		event.preventDefault();
		openItemInfo($(this).attr('href'));
	});

	/* close folding content */
	foldingPanel.on('click', '.cd-close', function(event){
		event.preventDefault();
		toggleContent('', false);
	});
	gallery.on('click', function(event){
		/* detect click on .cd-gallery::before when the .cd-folding-panel is open */
		if($(event.target).is('.cd-gallery') && $('.fold-is-open').length > 0 ) toggleContent('', false);
	})

	function openItemInfo(url) {
		//document.print(url);
		console.log(url);
		var mq = viewportSize();
		if( gallery.offset().top > $(window).scrollTop() && mq != 'mobile') {
			/* if content is visible above the .cd-gallery - scroll before opening the folding panel */
			$('body,html').animate({
				'scrollTop': gallery.offset().top
			}, 100, function(){ 
	           	toggleContent(url, true);
	        }); 
	    } else if( gallery.offset().top + gallery.height() < $(window).scrollTop() + $(window).height()  && mq != 'mobile' ) {
			/* if content is visible below the .cd-gallery - scroll before opening the folding panel */
			$('body,html').animate({
				'scrollTop': gallery.offset().top + gallery.height() - $(window).height()
			}, 100, function(){ 
	           	toggleContent(url, true);
	        });
		} else {
			toggleContent(url, true);
		}
	}

	function toggleContent(url, bool) {
		if( bool ) {
			/* load and show new content */
			var foldingContent = foldingPanel.find('.cd-fold-content');
		
			if(url=="item-1.html"){
			foldingContent.html(
                '<div style="text-align:justify" class="cd-fold-content single-page">'+
            
                '   <h2>What is ‘Hack and Tackle’ about? </h2>'+
             		'<p></p>'+
                '   <p>Hack and Tackle is a hackathon that will be based on five different, namely environment, healthcare, women’s safety, agriculture and social welfare. The participants will have to come up with ideas to solve real world problems related to the topics listed above and build working solutions for the same.</p>'+
                '</div>');
                setTimeout(function(){
                    $('body').addClass('overflow-hidden');
                    foldingPanel.addClass('is-open');
                    mainContent.addClass('fold-is-open');
                }, 100);
            }
            else if(url=="item-2.html"){
			foldingContent.html(
                '<div class="cd-fold-content single-page">'+
            
                '   <h2> Who can participate?</h2>'+
             		'<p></p>'+
                '   <p>	Students belonging to any year in college pursuing their undergraduate studies across India can participate in this event. We would recommend having team members who have good design and development skills to have the best possible division of labour and implementation throughout the event. Each team can have 3 to 5 members.</p>'+
                '</div>');
                setTimeout(function(){
                    $('body').addClass('overflow-hidden');
                    foldingPanel.addClass('is-open');
                    mainContent.addClass('fold-is-open');
                }, 100);
            }
            else if(url=="item-3.html"){
			foldingContent.html(
                '<div class="cd-fold-content single-page">'+
            
                '   <h2>How can we register for the event?</h2>'+
             		'<p></p>'+
                '   <p>The hackathon will take place in two Phases. Phase 1 is where students can participate by completing their registration and submitting the abstract for one of the tracks of their choice. Registrations for both phases have to be completed online. The registration link will be released on the official ‘Hack and Tackle’ website as given in the tentative schedule.If shortlisted for Phase 2, the participants will have to pay a registration fee for participating in Phase 2. Phase 2 will take place at SSN college of engineering, Kalavakkam, Chennai 603110.</p>'+
                '</div>');
                setTimeout(function(){
                    $('body').addClass('overflow-hidden');
                    foldingPanel.addClass('is-open');
                    mainContent.addClass('fold-is-open');
                }, 100);
            }
            else if(url=="item-4.html"){
			foldingContent.html(
                '<div class="cd-fold-content single-page">'+
            
                '   <h2>What are the tentative dates for the event?</h2>'+
             		'<p></p>'+
                '   <p>Registration for phase one opens on 19th of october 2018.</p>'+
				'<p>Registration for phase one closes on 15th of November 2018.</p>'+
'<p>Teams that have been shortlisted for Phase 2 will be announced on 23rd of November 2018.</p>'+
'<p>Registration for shortlisted teams for Phase 2 opens on 23rd November and closes on 28th November 2018.</p>'+
'<p>On site Hackathon will begin on 31st of January and end on 1st February 2019.</p>'+
                '</div>');
                setTimeout(function(){
                    $('body').addClass('overflow-hidden');
                    foldingPanel.addClass('is-open');
                    mainContent.addClass('fold-is-open');
                }, 100);
            }
            else if(url=="item-5.html"){
			foldingContent.html(
                '<div class="cd-fold-content single-page">'+
            
                '   <h2>How will the event be conducted?</h2>'+
             		'<p></p>'+
                '   <p>The hackathon will take place in two phases. In phase 1, the participants will upload the solution of the problem statement along with the registration form. The ideas and the solutions can be based on any of the aforementioned tracks. The ideas will be judged based on the scope, novelty, feasibility, technology, utility and social relevance. Then, the best ideas will be chosen for phase 2.</p>'+
'<p>Phase 2 will be conducted at SSN College of Engineering. </p>'+
                '</div>');
                setTimeout(function(){
                    $('body').addClass('overflow-hidden');
                    foldingPanel.addClass('is-open');
                    mainContent.addClass('fold-is-open');
                }, 100);
            }
            else if(url=="item-6.html"){
			foldingContent.html(
                '<div style="text-align:justify" class="cd-fold-content single-page">'+
            
                '   <h2>Will the participants be provided accommodation during Phase 2?</h2>'+
             		'<p></p>'+
                '   <p>	Yes, the participants will be provided accommodation on charged basis.</p>'+
                '   <p> INR 150 per day (Shared room).</p>'+
                '</div>');
                setTimeout(function(){
                    $('body').addClass('overflow-hidden');
                    foldingPanel.addClass('is-open');
                    mainContent.addClass('fold-is-open');
                }, 100);
            }
            else if(url=="item-7.html"){
			foldingContent.html(
                '<div style="text-align:justify" class="cd-fold-content single-page">'+
            
                '   <h2>What are the things that have to be brought (for Phase 2)?</h2>'+
             		'<p></p>'+
                '   <p>College ID card, required software and hardware devices, chargers, extension cables, sleeping equipments and any other additional components,if necessary. No pre-assembled protoypes and modules are allowed in the event.</p>'+
                '</div>');
                setTimeout(function(){
                    $('body').addClass('overflow-hidden');
                    foldingPanel.addClass('is-open');
                    mainContent.addClass('fold-is-open');
                }, 100);
            }
            else if(url=="item-8.html"){
			foldingContent.html(
                '<div class="cd-fold-content single-page">'+
            
                '   <h2>Will the participants be provided food during Phase 2?</h2>'+
             		'<p></p>'+
                '   <p>Yes, the participants will be provided food during the phase 2 of the hackathon.</p>'+
                '</div>');
                setTimeout(function(){
                    $('body').addClass('overflow-hidden');
                    foldingPanel.addClass('is-open');
                    mainContent.addClass('fold-is-open');
                }, 100);
            }
            else if(url=="item-9.html"){
			foldingContent.html(
                '<div class="cd-fold-content single-page">'+
            
                '   <h2>What is good about this event? How will it help the students?</h2>'+
             		'<p></p>'+
                '   <p>Hack and Tackle 1.0 will help the students to develop the critical thinking and ability to work in teams. It will also help students to look into real world problems and learn more about implementing ideas in real life. In addition, they can network with industry delegates.</p>'+
                '</div>');
                setTimeout(function(){
                    $('body').addClass('overflow-hidden');
                    foldingPanel.addClass('is-open');
                    mainContent.addClass('fold-is-open');
                }, 100);
            }
            else if(url=="item-10.html"){
			foldingContent.html(
                '<div class="cd-fold-content single-page">'+
            
                '   <h2>About the dept of Information Technology</h2>'+
             		'<p></p>'+
                '   <p>The Department of Information Technology was established in the year 1999. Our Mission is to provide quality education to the students and impart IT excellence in them. Apart from making them good technocrats, we also provide individual attention to make them good citizens of our nation to serve the industry and society constructively.</p>'
                +'</div>');
                setTimeout(function(){
                    $('body').addClass('overflow-hidden');
                    foldingPanel.addClass('is-open');
                    mainContent.addClass('fold-is-open');
                }, 100);
            }
            else if(url=="item-11.html"){
			foldingContent.html(
                '<div class="cd-fold-content single-page">'+
            
                '   <h2>If Any Unanswered Queries</h2>'+
             		'<p></p>'+
                '   <p>Mail us to: <a href="mailto:hackathon.ssnieee@gmail.com">hackathon.ssnieee@gmail.com</a></p>'+
                
                '</div>');
                setTimeout(function(){
                    $('body').addClass('overflow-hidden');
                    foldingPanel.addClass('is-open');
                    mainContent.addClass('fold-is-open');
                }, 100);
            }
            else if(url=="item-12.html"){
			foldingContent.html(
                '<div class="cd-fold-content single-page">'+
            
                '   <h2>IEEE at SSNCE</h2>'+
             		'<p></p>'+
                '   <p>The IEEE student Branch of SSN Engineering College was formed on 2nd May 1998. The objective of starting IEEE Student branch was to create awareness about latest technological developments, to make them to utilize the resources available in IEEE and to involve student members in publishing research papers and projects through IEEE.  It has organized many events to provide outstanding value to its members.</p>'+
                '</div>');
                setTimeout(function(){
                    $('body').addClass('overflow-hidden');
                    foldingPanel.addClass('is-open');
                    mainContent.addClass('fold-is-open');
                }, 100);
            }
            
		} else {
			/* close the folding panel */
			var mq = viewportSize();
			foldingPanel.removeClass('is-open');
			mainContent.removeClass('fold-is-open');
			
			(mq == 'mobile' || $('.no-csstransitions').length > 0 ) 
				/* according to the mq, immediately remove the .overflow-hidden or wait for the end of the animation */
				? $('body').removeClass('overflow-hidden')
				
				: mainContent.find('.cd-item').eq(0).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					$('body').removeClass('overflow-hidden');
					mainContent.find('.cd-item').eq(0).off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
				});
		}
		
	}

	function viewportSize() {
		/* retrieve the content value of .cd-main::before to check the actua mq */
		return window.getComputedStyle(document.querySelector('.cd-main'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
	}
});