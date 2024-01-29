---
title: Experimental SDG statistics
permalink: /en/statistics_exp/11_exp/
lang: en
layout: page_exp
---

<style>
	#chartcontrols {
	  height: auto;
	  padding: 5px 45px 0 15px;
	}
	#map {
			width: 500px;
			height: 500px;
	}
</style>

<div id="main" class="main-content initiative-content">
		<section class="pl-banner-exp-indicator">
            <div class="pl-grid">
                <div class="pl-banner-content">
                  <h1 style="margin-top: 15px;margin-bottom: 22px;">
                  Experimental statistics<br />
                  Goal 11 - Sustainable cities & communities
                  </h1>
                </div>
            </div>
        </section>

        <div class="pl-grid initiative-description">
          <ol class="breadcrumb">
            <li><a title="Go to homepage" href="{{ site.baseurl }}/en/statistics_exp">Home</a> / </li>
            <li class="active"> Goal 11</li>
          </ol>


				<div id="goal" style="overflow-x: auto;">
		    <table class="indicator-status-table">
		      <thead>
		        <tr style="padding: 1.5rem; text-align: left; height: 45px;">
		              <th scope="col" style="text-align: center;">Indicators</th>
		        </tr>
		      </thead>
		      <tbody>
						<tr>
							<td style="text-align: left; padding: 10px;"><a href="{{ site.baseurl }}/en/statistics_exp/11_3_1_exp" title="11.3.1 Ratio of land consumption rate to population growth rate">11.3.1 Ratio of land consumption rate to population growth rate</a></td>
						</tr>
						<tr>
							<td style="text-align: left; padding: 10px;"><a href="{{ site.baseurl }}/en/statistics_exp/11_7_1_exp" title="11.7.1 Average share of the built-up area of cities that is open space for public use for all">11.7.1 Average share of the built-up area of cities that is open space for public use for all</a></td>
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
