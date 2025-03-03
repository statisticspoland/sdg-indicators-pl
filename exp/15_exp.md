---
title: Statystyki eksperymentalne SDG
permalink: /statistics_exp/15_exp/
layout: page_exp
---

<div id="main" class="main-content initiative-content">
		<section class="pl-banner-exp-indicator">
            <div class="pl-grid">
                <div class="pl-banner-content">
                  <h1 style="margin-top: 15px;margin-bottom: 22px;">
                  Statystyki eksperymentalne<br />
                  Cel 15 - Życie na lądzie
                  </h1>
                </div>
            </div>
        </section>

        <div class="pl-grid initiative-description">
          <ol class="breadcrumb">
            <li><a title="Przejdź do strony głównej" href="{{ site.baseurl }}/statistics_exp">Strona Główna</a> / </li>
            <li class="active"> Cel 15</li>
          </ol>


				<div id="goal" style="overflow-x: auto;">
		    <table class="indicator-status-table">
		      <thead>
		        <tr style="padding: 1.5rem; text-align: left; height: 45px;">
		              <th scope="col" style="text-align: center;">Opis wskaźnika</th>
		        </tr>
		      </thead>
		      <tbody>
						<tr>
							<td style="text-align: left; padding: 10px;"><a href="{{ site.baseurl }}/statistics_exp/15_1_2_exp" title="15.1.2 Odsetek terenów lądowych i wód powierzchniowych istotnych dla różnorodności biologicznej objętych ochroną - według typu ekosystemu">15.1.2 Odsetek terenów lądowych i wód powierzchniowych istotnych dla różnorodności biologicznej objętych ochroną - według typu ekosystemu</a></td>
						</tr>
						<tr>
							<td style="text-align: left; padding: 10px;"><a href="{{ site.baseurl }}/statistics_exp/15_4_1_exp" title="15.4.1 Odsetek obszarów chronionych istotnych dla różnorodności biologicznej obszarów górskich">15.4.1 Odsetek obszarów chronionych istotnych dla różnorodności biologicznej obszarów górskich</a></td>
						</tr>
		      </tbody>
		    </table>
		    </div>
				</div>

				<br/>
				<br/>
				<br/>
</div>

<script>




				$(document).ready(function() {
				    if (location.hash) {
				        $("a[href='" + location.hash + "']").tab("show");
								console.log("doc1");
				    }
				    $(document.body).on("click", "a[data-toggle]", function(event) {
				        location.hash = this.getAttribute("href");
								//ładowanie mapy
								if(location.hash === "#maps"){
									console.log(location.hash);
									//reload();
								}
				    });
				});
				$(window).on("popstate", function() {
				    var anchor = location.hash || $("a[data-toggle='tab']").first().attr("href");
				    $("a[href='" + anchor + "']").tab("show");
				});

				var currentLink = null;
				        function changeLinkColor(link){
				            if(currentLink!=null){
				                currentLink.style.color = link.style.color;
				            }
				            link.style.color = 'blue';
				            currentLink = link;
				        }
</script>
