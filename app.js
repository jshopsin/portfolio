$(document).ready(function() {
  $('div #summary').show();
  tabsChange('#summary', ['#skills', '#qualifications', '#projects', '#experience']);
  tabsChange('#skills', ['#summary', '#qualifications', '#projects', '#experience']);
  tabsChange('#qualifications', ['#summary', '#skills', '#projects', '#experience']);
  tabsChange('#projects', ['#summary', '#skills', '#qualifications', '#experience']);
  tabsChange('#experience', ['#summary', '#skills', '#qualifications', '#projects']);

  subTabsChange('#education', ['#awards']);
  subTabsChange('#awards', ['#education']);

  subTabsChange('#one-stop-shop', ['#imdbc', '#hawk-set']);
  subTabsChange('#imdbc', ['#one-stop-shop', '#hawk-set']);
  subTabsChange('#hawk-set', ['#one-stop-shop', '#imdbc']);

  subTabsChange('#mason', ['#hks', '#bleecker']);
  subTabsChange('#hks', ['#mason', '#bleecker']);
  subTabsChange('#bleecker', ['#mason', '#hks']);
});

function tabsChange(showTab, hideTabArray) {
  $(".tabs li a[href = " + showTab + "]").on("click", function(event) {
    event.preventDefault();
    for (i in hideTabArray) {
      $("a[href = " + hideTabArray[i] + "]").parent().removeClass('active');
      $('div ' + hideTabArray[i]).hide();
    };
    $("a[href = " + showTab + "]").parent().addClass('active');
    $('div ' + showTab).show();
    if (showTab === '#qualifications') {
      subTabsChange('#education', ['#awards']);
      $("a[href = #education]").parent().addClass('active');
      $('div #education').show();
    };
    if (showTab === '#projects') {
      $("a[href = #one-stop-shop]").parent().addClass('active');
      $('div #one-stop-shop').show();
    };
    if (showTab === '#experience') {
      $("a[href = #mason]").parent().addClass('active');
      $('div #mason').show();
    };
  });
};

function subTabsChange(showTab, hideTabArray) {
  $(".sub-tabs li a[href = " + showTab + "]").on("click", function(event) {
    event.preventDefault();
    for (i in hideTabArray) {
      $("a[href = " + hideTabArray[i] + "]").parent().removeClass('active');
      $('div ' + hideTabArray[i]).hide();
    };
    $("a[href = " + showTab + "]").parent().addClass('active');
    $('div ' + showTab).show();
  });
};