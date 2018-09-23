<div id="left">
				<div id="picWrapper">
					<img id="pic" src="img/me.jpg">
				</div>
				<div id="nav">
				
					<ul>
					<?php
					
						$pages = array(
							"Bio" => "index.php",
							"Resume" => "resume.php",
							"Music" => "music.php",
							"Art" => "art.php",
							"Apps" => "apps.php",
							"Blog" => "blog.php");
						
						foreach($pages as $page => $page_value) {
							echo "<li><a href=\"" . $page_value . "\">" . $page . "</a></li>";
						}
					
					?>
					</ul>
				
					
				</div>
				
				<div id="contact">
					<div style="width: 100%">
						<div style="display: inline-block; width: 50%; float: left;">
							<div>
								<span class="tooltip">
									<a target="_blank" href="https://www.linkedin.com/in/danielbednarczyk/">
										<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
											 viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
											<path d="M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z M36,75.3c-3.5,0-7,0-10.5,0c0-11.2,0-22.4,0-33.6
												c0-0.1,0-0.2,0.1-0.2c3.5,0,7,0,10.5,0C36,52.7,36,64,36,75.3z M27.3,35.9c-1.6-1.1-2.9-3.4-2.6-6.1c0.3-2,1.7-3.7,3.2-4.5
												c0.5-0.3,1.2-0.5,2-0.5c4-0.5,7,2.3,7,6.1C36.8,35.5,31.5,38.7,27.3,35.9z M75.4,75.3c-3.5,0-7,0-10.5,0c0-3.8,0-7.8,0-12.1
												c0-5.1,0.7-11-2.8-12.8c-1.7-0.9-4-0.6-5.5,0c-3.8,1.7-3.5,7.1-3.5,13c0,4.1,0,8.4,0,11.9c-3.5,0-7,0-10.5,0c0-11.3,0-22.6,0-33.8
												c3.4,0,6.7,0,10.1,0c0,1.5,0,3.1,0,4.6c0.4-0.3,0.5-0.7,0.8-1.1c1.8-2.4,5-4.4,9.1-4.4c5.2,0,8.9,1.8,10.8,5.1c2,3.5,2,8.4,2,13.9
												C75.4,64.7,75.4,70.3,75.4,75.3z"/>
										</svg>
									</a>
									<span class="tooltiptext tooltip-top">Connect on LinkedIn</span>
								</span>
							</div>
						</div>
						<!--<div style="display: inline-block; width: 33%; float: left;">
							<div>
								<span class="tooltip">
									<a target="_blank" href="https://www.linkedin.com/in/danielbednarczyk/">
										<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
											 viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
											<path d="M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z M36,75.3c-3.5,0-7,0-10.5,0c0-11.2,0-22.4,0-33.6
												c0-0.1,0-0.2,0.1-0.2c3.5,0,7,0,10.5,0C36,52.7,36,64,36,75.3z M27.3,35.9c-1.6-1.1-2.9-3.4-2.6-6.1c0.3-2,1.7-3.7,3.2-4.5
												c0.5-0.3,1.2-0.5,2-0.5c4-0.5,7,2.3,7,6.1C36.8,35.5,31.5,38.7,27.3,35.9z M75.4,75.3c-3.5,0-7,0-10.5,0c0-3.8,0-7.8,0-12.1
												c0-5.1,0.7-11-2.8-12.8c-1.7-0.9-4-0.6-5.5,0c-3.8,1.7-3.5,7.1-3.5,13c0,4.1,0,8.4,0,11.9c-3.5,0-7,0-10.5,0c0-11.3,0-22.6,0-33.8
												c3.4,0,6.7,0,10.1,0c0,1.5,0,3.1,0,4.6c0.4-0.3,0.5-0.7,0.8-1.1c1.8-2.4,5-4.4,9.1-4.4c5.2,0,8.9,1.8,10.8,5.1c2,3.5,2,8.4,2,13.9
												C75.4,64.7,75.4,70.3,75.4,75.3z"/>
										</svg>
									</a>
									<span class="tooltiptext tooltip-top">Send Message</span>
								</span>
							</div>
						</div>-->
						<div style="display: inline-block; width: 50%; float: right;">
							<div>
								<span class="tooltip">
									<a target="_blank" href="https://atlaseuphoria.bandcamp.com/releases">
										<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
											 width="97.75px" height="97.75px" viewBox="0 0 97.75 97.75" style="enable-background:new 0 0 97.75 97.75;" xml:space="preserve">
											<g>
												<path d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z
													 M64.835,70.857H12.593l20.32-43.965h52.244L64.835,70.857z"/>
											</g>
										</svg>
									</a>
									<span class="tooltiptext tooltip-top">Listen on Bandcamp</span>
								</span>
							</div>	
						</div>
					</div>
				</div>
			</div>