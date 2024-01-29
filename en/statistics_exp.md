---
title: Experimental SDG statistics
permalink: /en/statistics_exp/
lang: en
layout: page_exp
---
<div id="main" class="main-content" role="main">

  <a id="main-content" tabindex="-1"></a>
		<section class="pl-banner-exp">
    <div class="pl-grid">
      <div class="pl-banner-content">
                        <h1>Experimental SDG statistics</h1>
      </div>
    </div>
  </section>

  <section class="usa-section">
    <div class="pl-grid">
      <div class="usa-font-lead intro-paragraph">
        <div style="font-weight: bold">Welcome to the experimental SDG statistics website</div>
        <p>Here you can find indicators that we calculate using innovative methods and integrated data sources. They do not constitute official data but supplement the results of statistical research. Experimental indicators allow us to obtain a fuller picture of the implementation of sustainable development in Poland. </p>
        <p>Follow our website – we will soon be adding further results of the experimental work for other SDG indicators.</p>
        <div>Click Goal to continue:</div>
      </div>


      <section class="goals-list">

	      {% if page.lang == 'en' %}
              {% assign language = 'en/' %}
              {% assign text = 'Go to goal ' %}
        {% else %}
              {% assign language = '' %}
              {% assign text = 'Przejdź do celu o nazwie ' %}
        {% endif %}

        <div class="grid-container" style="display: grid; grid-template-columns: 1fr 1fr;grid-gap: 20px;">

        <div class="grid-child" style="width:400 px; height: 400 px;">
          <div id = "09" class="grid-child">
              <a class="kafelek" alt="{{ goals.title }}" title="{{text}}{{ goals.title }}" style="background-image:url('{{ site.baseurl }}/assets/img/{{ page.lang }}/{{ page.lang }}-sdg-goal-09.png');" href="{{ site.baseurl }}/{{ language }}statistics_exp/09_exp"></a>
          </div>
        </div>

        <div class="grid-child" style="width:400 px; height: 400 px;">
          <div id = "11" class="grid-child">
            <a class="kafelek" alt="{{ goals.title }}" title="{{text}}{{ goals.title }}" style="background-image:url('{{ site.baseurl }}/assets/img/{{ page.lang }}/{{ page.lang }}-sdg-goal-11.png');" href="{{ site.baseurl }}/{{ language }}statistics_exp/11_exp"></a>
          </div>
        </div>

        </div>

      </section>
    </div>
  </section>
</div>
