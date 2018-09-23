jQuery(document).ready(function($) {
					  $('#albums').bind('click', function(event) {
						event.preventDefault();

						Lightview.show([{
							url: 'img/gallery/albums/silent_city.jpg',
							title: 'Silent City (2017)',
							caption: 'A city grid constructed of decontextualized nature shots, representing the album\'s themes of the ubiquity of nature',
						},{
							url: 'img/gallery/albums/silent_city_back.jpg',
							title: 'Silent City (back)',
							caption: '',
						},{
							url: 'img/gallery/albums/need_not.jpg',
							title: 'Need Not EP (2018)',
							caption: 'Featuring an unedited shot of a lone leaf in the Youghiogheny River, representing the album\'s themes of identity and minimalism',
						},{
							url: 'img/gallery/albums/songs_and_how_not_to_write_them.jpg',
							title: 'Songs; And How NOT To Write Them! (2015)',
							caption: 'A mostly humerous album paying homage to classic ska and doo-wop motifs',
						},{
							url: 'img/gallery/albums/songs_and_how_not_to_write_them_back.jpg',
							title: 'Songs; And How NOT To Write Them! (back)',
							caption: '',
						},{
							url: 'img/gallery/albums/peanut_butter_jam.jpg',
							title: 'Peanut Butter Jam single (2017)',
							caption: 'Easily my messiest piece',
						},{
							url: 'img/gallery/albums/yellow_snow.jpg',
							title: 'Yellow Snow EP (2015)',
							caption: 'Featuring a snowcone to represent Christmas in July',
						},{
							url: 'img/gallery/albums/out_of_reach.jpg',
							title: 'Out of Reach (2011)',
							caption: 'Some of my earliest graphic design work',
						},{
							url: 'img/gallery/albums/human_architecture.jpg',
							title: 'Human Architecture (2017)',
							caption: 'The gyroscope featured here symbolizes the balance of sin and virute explored by the album\'s music',
						},{
							url: 'img/gallery/albums/mac_demarco_covers.jpg',
							title: 'Mac DeMarco Covers (2017)',
							caption: 'A homage to Mac DeMarco\'s album "2"',
						},{
							url: 'img/gallery/albums/string.jpg',
							title: 'String single (2017)',
							caption: 'Artwork commissioned for Indigo Zoo',
						},{
							url: 'img/gallery/albums/of_dreams.jpg',
							title: 'Of Dreams single (2017)',
							caption: 'Artwork commissioned for Indigo Zoo',
						}],
						{
							controls: 'thumbnails',
						}
						);
					  });
					  $('#filters').bind('click', function(event) {
						event.preventDefault();

						Lightview.show([{
							url: 'img/gallery/filters/ward.png',
							title: 'Ward Street (2016)',
							caption: '',
						},{
							url: 'img/gallery/filters/chesterfield.png',
							title: 'Chesterfield Street (2015)',
							caption: '',
						},{
							url: 'img/gallery/filters/wpts.png',
							title: 'WPTS Radio (2015)',
							caption: '',
						},{
							url: 'img/gallery/filters/pitt.jpg',
							title: 'Pitt Residence Halls (2015)',
							caption: 'Designed as part of a proposal to Pitt\'s Residence Life department, though never activated',
						}],
						{
							controls: 'thumbnails',
						}
						);
					  });
					  $('#personal').bind('click', function(event) {
						event.preventDefault();

						Lightview.show([{
							url: 'img/gallery/personal/angel_demon.jpg',
							title: 'Angels & Demons (2011)',
							caption: '',
						},{
							url: 'img/gallery/personal/ceo.jpg',
							title: 'CEO Bednarcyk (2013)',
							caption: '',
						},{
							url: 'img/gallery/personal/chess.jpg',
							title: 'Checkmate (2017)',
							caption: 'Played an ugly guy in chess and lost',
						},{
							url: 'img/gallery/personal/spray_paint.jpg',
							title: 'Spray Painted (2011)',
							caption: 'Inspired by the album art for Green Day\s "Shenanigans"',
						},{
							url: 'img/gallery/personal/dollar.jpg',
							title: 'Dolla Dolla Bill Y\'all (2011)',
							caption: '',
						},{
							url: 'img/gallery/personal/godfather.jpg',
							title: 'The Godfather parody (2011)',
							caption: '',
						},{
							url: 'img/gallery/personal/hostage.jpg',
							title: 'Hostage (2011)',
							caption: 'Save me?',
						},{
							url: 'img/gallery/personal/jimmy_fallon.jpg',
							title: 'That Time I Met Jimmy Fallon (2014)',
							caption: '',
						},{
							url: 'img/gallery/personal/minime.jpg',
							title: 'MiniMe (2011)',
							caption: '',
						},{
							url: 'img/gallery/personal/missing_fridge.jpg',
							title: 'Have You Seen Me? (2011)',
							caption: '',
						},{
							url: 'img/gallery/personal/multitasking.jpg',
							title: 'Multitasking (2009)',
							caption: 'One of my first experiments in graphic design',
						},{
							url: 'img/gallery/personal/simpsons.jpg',
							title: 'With The Simpsons (2011)',
							caption: '',
						},{
							url: 'img/gallery/personal/skydiving.jpg',
							title: 'Skydiving (2011)',
							caption: 'Featuring my good friend Sarah Butterworth',
						},{
							url: 'img/gallery/personal/tv.jpg',
							title: 'Unplug Your TV (2012)',
							caption: '',
						}],
						{
							controls: 'thumbnails',
						}
						);
					  });
					  $('#shirts').bind('click', function(event) {
						event.preventDefault();

						Lightview.show([{
							url: 'img/gallery/shirts/freshmen.jpg',
							title: 'Freshmen E-Week Logo (2014)',
							caption: '',
						},{
							url: 'img/gallery/shirts/hunger_games.jpg',
							title: 'Hunger Games E-Week Crest (2015)',
							caption: '',
						},{
							url: 'img/gallery/shirts/harry_potter.jpg',
							title: 'Harry Potter E-Week Crest (2014)',
							caption: '',
						},{
							url: 'img/gallery/shirts/panther_pitt.jpg',
							title: 'The Panther Pitt (2016)',
							caption: '',
						},{
							url: 'img/gallery/shirts/pixar.jpg',
							title: 'Pixar E-Week Logo (2017)',
							caption: 'Styled after the Pixar movie "WALL-E"',
						}],
						{
							controls: 'thumbnails',
						}
						);
					  });
					  $('#tattoos').bind('click', function(event) {
						event.preventDefault();

						Lightview.show([{
							url: 'img/gallery/tattoos/lost_is_found.jpg',
							title: 'Lost is Found - Arm Band',
							caption: '(Globe 2015, Band 2016)',
						},{
							url: 'img/gallery/tattoos/binary_cross.jpg',
							title: 'Binary Cross (2014)',
							caption: '',
						}],
						{
							controls: 'thumbnails',
						}
						);
					  });
					  $('#apps').bind('click', function(event) {
						event.preventDefault();

						Lightview.show([{
							url: 'img/gallery/apps/ard.jpg',
							title: 'Augmented Reality Dashboard (2017)',
							caption: 'The ARD in action',
						},{
							url: 'img/gallery/apps/eaton.jpg',
							title: 'Pitt Engineering Design Expo (Spring 2017)',
							caption: 'My team with our sponser Dave from Eaton',
						},{
							url: 'img/gallery/apps/bit_decryptor.jpg',
							title: 'Bit Decryptor (2015)',
							caption: 'My first Android App, a boolean algebra calculator',
						},{
							url: 'img/gallery/apps/just_go_out.jpg',
							title: 'Just Go Out (2016)',
							caption: 'A simple app designed at the 2016 Steelhacks hackathon to randomly select local public Facebook events.',
						}],
						{
							controls: 'thumbnails',
						}
						);
					  });
					});