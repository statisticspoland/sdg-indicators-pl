---
title: Statystyki eksperymentalne SDG
permalink: /statistics_exp/
lang: pl
layout: page_exp
---
<div id="main" class="main-content" role="main">

  <a id="main-content" tabindex="-1"></a>
		<section class="pl-banner-exp">
    <div class="pl-grid">
      <div class="pl-banner-content">
        <h1>Statystyki eksperymentalne SDG</h1>
      </div>
    </div>
  </section>

  <section class="usa-section">
    <div class="pl-grid">
      <div class="usa-font-lead intro-paragraph">
        <div style="font-weight: bold">Witamy na stronie statystyk eksperymentalnych SDG</div>
        <p>Publikujemy tu wskaźniki, które obliczamy z wykorzystaniem nowatorskich metod i zintegrowanych źródeł danych. Nie mają one charakteru oficjalnych danych, ale uzupełniają wyniki badań statystycznych. Dzięki wskaźnikom eksperymentalnym zyskujemy pełniejszy obraz realizacji zrównoważonego rozwoju w Polsce.</p>
        <p>Śledź naszą stronę. Będziemy ją uzupełniać wynikami prac eksperymentalnych dla kolejnych wskaźników SDG.</p>
        <div>Kliknij Cel, aby przejść dalej:</div>
      </div>

{% if page.lang == 'pl' %}
  {% assign ktore = site.data.globalne %}
{% else %}
  {% assign ktore = site.data.globalne.en %}
{% endif %}
{% assign sdg_goals = ktore.sdg_goals %}

      <section class="goals-list">

      {% if page.lang == 'en' %}
        {% assign language = 'en/' %}
        {% assign text = 'Go to goal ' %}
      {% else %}
        {% assign language = '' %}
        {% assign text = 'Przejdź do celu ' %}
      {% endif %}

        <!-- <div class="grid-container" style="display: grid; grid-template-columns: 1fr 1fr 1fr;grid-gap: 20px;"> -->
        <div class="grid-container" style="display: flex; grid-gap: 20px; flex-wrap: wrap;">

        <div class="grid-child" style="width:400 px; height: 400 px;">
          <div id = "09" class="grid-child">
            <a class="kafelek" alt="{{ sdg_goals[8].title }}" title="{{text}}{{ sdg_goals[8].title }}" style="background-image:url('{{ site.baseurl }}/assets/img/{{ page.lang }}/{{ page.lang }}-sdg-goal-09.png');" href="{{ site.baseurl }}/{{ language }}statistics_exp/09_exp"></a>
          </div>
        </div>

        <div class="grid-child" style="width:400 px; height: 400 px;">
          <div id = "11" class="grid-child">
            <a class="kafelek" alt="{{ sdg_goals[10].title }}" title="{{text}}{{ sdg_goals[10].title }}" style="background-image:url('{{ site.baseurl }}/assets/img/{{ page.lang }}/{{ page.lang }}-sdg-goal-11.png');" href="{{ site.baseurl }}/{{ language }}statistics_exp/11_exp"></a>
          </div>
        </div>

        <div class="grid-child" style="width:400 px; height: 400 px;">
          <div id = "15" class="grid-child">
            <a class="kafelek" alt="{{ sdg_goals[14].title }}" title="{{text}}{{ sdg_goals[14].title }}" style="background-image:url('{{ site.baseurl }}/assets/img/{{ page.lang }}/{{ page.lang }}-sdg-goal-15.png');" href="{{ site.baseurl }}/{{ language }}statistics_exp/15_exp"></a>
          </div>
        </div>

        </div>

      </section>
    </div>
  </section>

</div>
