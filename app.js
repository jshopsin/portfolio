$(document).ready(function() {
  $('div #summary').show();
  tabsChange('#summary', ['#skills', '#qualifications', '#projects', '#experience']);
  tabsChange('#skills', ['#summary', '#qualifications', '#projects', '#experience']);
  tabsChange('#qualifications', ['#summary', '#skills', '#projects', '#experience']);
  tabsChange('#projects', ['#summary', '#skills', '#qualifications', '#experience']);
  tabsChange('#experience', ['#summary', '#skills', '#qualifications', '#projects']);

  subTabsChangeClick('#education', ['#awards']);
  subTabsChangeClick('#awards', ['#education']);

  subTabsChangeClick('#one-stop-shop', ['#imdbc', '#hawk-set']);
  subTabsChangeClick('#imdbc', ['#one-stop-shop', '#hawk-set']);
  subTabsChangeClick('#hawk-set', ['#one-stop-shop', '#imdbc']);

  subTabsChangeClick('#mason', ['#hks', '#bleecker']);
  subTabsChangeClick('#hks', ['#mason', '#bleecker']);
  subTabsChangeClick('#bleecker', ['#mason', '#hks']);
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
      // $("a[href = #education]").parent().addClass('active');
      // $('div #education').show();
    };
    if (showTab === '#projects') {
      subTabsChange('#one-stop-shop', ['#imdbc', '#hawk-set']);
      // $("a[href = #one-stop-shop]").parent().addClass('active');
      // $('div #one-stop-shop').show();
    };
    if (showTab === '#experience') {
      subTabsChange('#mason', ['#hks', '#bleecker']);
      // $("a[href = #mason]").parent().addClass('active');
      // $('div #mason').show();
    };
  });
};

function subTabsChangeClick(showTab, hideTabArray) {
  $(".sub-tabs li a[href = " + showTab + "]").on("click", function(event) {
    event.preventDefault();
    subTabsChange(showTab, hideTabArray);
  });
};

function subTabsChange(showTab, hideTabArray) {
  for (i in hideTabArray) {
    $("a[href = " + hideTabArray[i] + "]").parent().removeClass('active');
    $('div ' + hideTabArray[i]).hide();
  };
  $("a[href = " + showTab + "]").parent().addClass('active');
  $('div ' + showTab).show();
};