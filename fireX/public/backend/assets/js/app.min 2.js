easeInOutQuad=function(t,e,n,o){return(t/=o/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e},scrollTo=function(e,t,n){var o=e.scrollTop,i=t-o,a=0,r=function(){a+=20;var t=easeInOutQuad(a,o,i,n);e.scrollTop=t,a<n&&setTimeout(r,20)};r()},function(s){"use strict";function t(){this.body=s("body"),this.window=s(window)}t.prototype.initMenu=function(){var n,o,e,i,a,r=this;s(".button-menu-mobile").on("click",function(t){t.preventDefault(),r.body.toggleClass("sidebar-enable")}),s("#side-menu").length&&((i=s("#side-menu li .collapse")).on({"show.bs.collapse":function(t){var e=s(t.target).parents(".collapse.show");s("#side-menu .collapse.show").not(e).collapse("hide")}}),s("#side-menu a").each(function(){var t,e,n,o=window.location.href.split(/[?#]/)[0];this.href==o&&(s(this).addClass("active"),s(this).parent().addClass("menuitem-active"),s(this).parent().parent().parent().addClass("show"),s(this).parent().parent().parent().parent().addClass("menuitem-active"),"sidebar-menu"!==(t=s(this).parent().parent().parent().parent().parent().parent()).attr("id")&&t.addClass("show"),s(this).parent().parent().parent().parent().parent().parent().parent().addClass("menuitem-active"),"wrapper"!==(e=s(this).parent().parent().parent().parent().parent().parent().parent().parent().parent()).attr("id")&&e.addClass("show"),(n=s(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent()).is("body")||n.addClass("menuitem-active")),setTimeout(function(){var t,e,n=document.querySelector("li.menuitem-active .active");null!=n&&(t=document.querySelector(".left-side-menu .simplebar-content-wrapper"),e=n.offsetTop-300,t&&100<e&&scrollTo(t,e,600))},200)})),s("#two-col-sidenav-main").length&&(n=s("#two-col-sidenav-main .nav-link"),o=s(".twocolumn-menu-item"),e=s(".twocolumn-menu-item .nav-second-level"),(i=s("#two-col-menu li .collapse")).on({"show.bs.collapse":function(){var t=s(this).closest(e).closest(e).find(i);t.length?t.not(s(this)).collapse("hide"):i.not(s(this)).collapse("hide")}}),n.on("click",function(t){var e=s(s(this).attr("href"));return!e.length||(t.preventDefault(),n.removeClass("active"),s(this).addClass("active"),o.removeClass("d-block"),e.addClass("d-block"),console.log(s.ThemeCustomizer),window.themeCustomizer&&window.themeCustomizer.changeLeftbarSize("default"),!1)}),a=window.location.href,n.each(function(){this.href===a&&s(this).addClass("active")}),s("#two-col-menu a").each(function(){var t,e,n,o,i;this.href==a&&(s(this).addClass("active"),s(this).parent().addClass("menuitem-active"),s(this).parent().parent().parent().addClass("show"),s(this).parent().parent().parent().parent().addClass("menuitem-active"),"sidebar-menu"!==(t=s(this).parent().parent().parent().parent().parent().parent()).attr("id")&&t.addClass("show"),s(this).parent().parent().parent().parent().parent().parent().parent().addClass("menuitem-active"),"wrapper"!==(e=s(this).parent().parent().parent().parent().parent().parent().parent().parent().parent()).attr("id")&&e.addClass("show"),(n=s(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().parent()).is("body")||n.addClass("menuitem-active"),o=null,i="#"+s(this).parents(".twocolumn-menu-item").attr("id"),s("#two-col-sidenav-main .nav-link").each(function(){s(this).attr("href")===i&&(o=s(this))}),o&&o.trigger("click"))}))},t.prototype.initLayout=function(){},t.prototype.init=function(){var e=this;this.initMenu(),this.initLayout(),this.window.on("resize",function(t){t.preventDefault(),e.initLayout()})},s.LeftSidebar=new t,s.LeftSidebar.Constructor=t}(window.jQuery),function(i){"use strict";function t(){this.body=i("body"),this.window=i(window)}t.prototype.initMenu=function(){i("#top-search").on("click",function(t){i("#search-dropdown").addClass("d-block")}),i(".topbar-dropdown").on("show.bs.dropdown",function(){i("#search-dropdown").removeClass("d-block")}),i(".navbar-nav a").each(function(){var t,e,n=window.location.href.split(/[?#]/)[0];this.href==n&&(i(this).addClass("active"),i(this).parent().addClass("active"),i(this).parent().parent().addClass("active"),i(this).parent().parent().parent().addClass("active"),i(this).parent().parent().parent().parent().addClass("active"),i(this).parent().parent().parent().parent().hasClass("mega-dropdown-menu")?(i(this).parent().parent().parent().parent().parent().addClass("active"),i(this).parent().parent().parent().parent().parent().parent().addClass("active")):(t=i(this).parent().parent()[0].querySelector(".dropdown-item"))&&(n=window.location.href.split(/[?#]/)[0],t.href!=n&&!t.classList.contains("dropdown-toggle")||t.classList.add("active")),(e=i(this).parent().parent().parent().parent().addClass("active").prev()).hasClass("nav-link")&&e.addClass("active"))}),i(".navbar-toggle").on("click",function(t){i(this).toggleClass("open"),i("#navigation").slideToggle(400)});var t=document.querySelectorAll("ul.navbar-nav .dropdown .dropdown-toggle"),o=!1;t.forEach(function(n){n.addEventListener("click",function(t){var e;n.parentElement.classList.contains("nav-item")||(o=!0,n.parentElement.parentElement.classList.add("show"),(e=n.parentElement.parentElement.parentElement.querySelector(".nav-link")).ariaExpanded=!0,e.classList.add("show"),bootstrap.Dropdown.getInstance(n).show())}),n.addEventListener("hide.bs.dropdown",function(t){o&&(t.preventDefault(),t.stopPropagation(),o=!1)})})},t.prototype.init=function(){this.initMenu()},i.Topbar=new t,i.Topbar.Constructor=t}(window.jQuery),function(e){"use strict";function t(){this.body=e("body"),this.window=e(window)}t.prototype.toggleRightSideBar=function(){this.body.toggleClass("right-bar-enabled")},t.prototype.init=function(){var t=this;e(document).on("click",".right-bar-toggle",function(){t.toggleRightSideBar()}),e(document).on("click","body",function(t){1!==e(t.target).closest("#top-search").length&&e("#search-dropdown").removeClass("d-block"),0<e(t.target).closest(".right-bar-toggle, .right-bar").length||0<e(t.target).closest(".left-side-menu, .side-nav").length||e(t.target).hasClass("button-menu-mobile")||0<e(t.target).closest(".button-menu-mobile").length||(e("body").removeClass("right-bar-enabled"),e("body").removeClass("sidebar-enable"))})},e.RightBar=new t,e.RightBar.Constructor=t}(window.jQuery),function(t){"use strict";function e(){}e.prototype.init=function(){this.leftSidebar=t.LeftSidebar,this.leftSidebar.init(),this.topbar=t.Topbar,this.themeCustomizer=t.ThemeCustomizer,this.themeCustomizer.init(),((this.leftSidebar.parent=this).topbar.parent=this).topbar.init()},t.LayoutThemeApp=new e,t.LayoutThemeApp.Constructor=e}(window.jQuery),function(t){"use strict";function e(){this.body=document.body,this.defaultConfig={leftbar:{color:"light",size:"default"},menu:{position:"fixed"},layout:{color:"light",width:"fluid",mode:"default"},topbar:{color:"light"},sidebar:{user:!0}}}e.prototype.initConfig=function(){var t=JSON.parse(JSON.stringify(this.defaultConfig));t.leftbar.color=null!=this.body.getAttribute("data-leftbar-color")?this.body.getAttribute("data-leftbar-color"):this.defaultConfig.leftbar.color,t.leftbar.size=null!=this.body.getAttribute("data-leftbar-size")?this.body.getAttribute("data-leftbar-size"):this.defaultConfig.leftbar.size,t.menu.position=null!=this.body.getAttribute("data-leftbar-position")?this.body.getAttribute("data-leftbar-position"):this.defaultConfig.menu.position,t.layout.color=null!=this.body.getAttribute("data-theme")?this.body.getAttribute("data-theme"):this.defaultConfig.layout.color,t.layout.width=null!=this.body.getAttribute("data-layout-width")?this.body.getAttribute("data-layout-width"):this.defaultConfig.layout.width,t.layout.mode=null!=this.body.getAttribute("data-layout-mode")?this.body.getAttribute("data-layout-mode"):this.defaultConfig.layout.mode,t.topbar.color=null!=this.body.getAttribute("data-topbar-color")?this.body.getAttribute("data-topbar-color"):this.defaultConfig.topbar.color,t.sidebar.user=null!=this.body.getAttribute("data-sidebar-user")?this.body.getAttribute("data-sidebar-user"):this.defaultConfig.sidebar.user,this.defaultConfig=JSON.parse(JSON.stringify(t)),this.config=t,this.setSwitchFromConfig()},e.prototype.changeLeftbarColor=function(t){this.config.leftbar.color=t,this.body.setAttribute("data-leftbar-color",t),this.setSwitchFromConfig()},e.prototype.changeMenuPosition=function(t){this.config.menu.position=t,this.body.setAttribute("data-menu-position",t),this.setSwitchFromConfig()},e.prototype.changeLeftbarSize=function(t){"topnav"!==this.config.layout.mode&&(this.config.leftbar.size=t,this.body.setAttribute("data-leftbar-size",t),this.setSwitchFromConfig())},e.prototype.changeLayoutMode=function(t){this.config.layout.mode=t,this.body.setAttribute("data-layout-mode",t),this.setSwitchFromConfig()},e.prototype.changeLayoutColor=function(t){this.config.layout.color=t,this.body.setAttribute("data-theme",t),this.setSwitchFromConfig()},e.prototype.changeLayoutWidth=function(t){this.config.layout.width=t,this.body.setAttribute("data-layout-width",t),"boxed"==t?this.changeLeftbarSize("condensed"):this.changeLeftbarSize("default"),this.setSwitchFromConfig()},e.prototype.changeTopbarColor=function(t){this.config.topbar.color=t,this.body.setAttribute("data-topbar-color",t),this.setSwitchFromConfig()},e.prototype.changeSidebarUser=function(t){(this.config.sidebar.user=t)?this.body.setAttribute("data-sidebar-user",t):this.body.removeAttribute("data-sidebar-user"),this.setSwitchFromConfig()},e.prototype.resetTheme=function(){this.config=JSON.parse(JSON.stringify(this.defaultConfig)),this.changeLeftbarColor(this.config.leftbar.color),this.changeMenuPosition(this.config.menu.position),this.changeLeftbarSize(this.config.leftbar.size),this.changeLayoutColor(this.config.layout.color),this.changeLayoutWidth(this.config.layout.width),this.changeLayoutMode(this.config.layout.mode),this.changeTopbarColor(this.config.topbar.color),this.changeSidebarUser(this.config.sidebar.user)},e.prototype.initSwitchListener=function(){var n=this;document.querySelectorAll("input[name=leftbar-color]").forEach(function(e){e.addEventListener("change",function(t){n.changeLeftbarColor(e.value)})}),document.querySelectorAll("input[name=leftbar-size]").forEach(function(e){e.addEventListener("change",function(t){n.changeLeftbarSize(e.value)})}),document.querySelectorAll("input[name=menu-position]").forEach(function(e){e.addEventListener("change",function(t){n.changeMenuPosition(e.value)})}),document.querySelectorAll("input[name=layout-color]").forEach(function(e){e.addEventListener("change",function(t){n.changeLayoutColor(e.value)})}),document.querySelectorAll("input[name=layout-width]").forEach(function(e){e.addEventListener("change",function(t){n.changeLayoutWidth(e.value)})}),document.querySelectorAll("input[name=layout-mode]").forEach(function(e){e.addEventListener("change",function(t){n.changeLayoutMode(e.value)})}),document.querySelectorAll("input[name=topbar-color]").forEach(function(e){e.addEventListener("change",function(t){n.changeTopbarColor(e.value)})}),document.querySelectorAll("input[name=sidebar-user]").forEach(function(e){e.addEventListener("change",function(t){n.changeSidebarUser(e.checked)})}),document.querySelector("#resetBtn")&&document.querySelector("#resetBtn").addEventListener("click",function(t){n.resetTheme()}),document.querySelector(".button-menu-mobile")&&document.querySelector(".button-menu-mobile").addEventListener("click",function(){"default"===n.config.leftbar.size?n.changeLeftbarSize("condensed"):n.changeLeftbarSize("default")})},e.prototype.initWindowSize=function(){var e=this;window.addEventListener("resize",function(t){750<=window.innerWidth&&window.innerWidth<=1028?e.changeLeftbarSize("condensed"):e.changeLeftbarSize("default")})},e.prototype.setSwitchFromConfig=function(){document.querySelectorAll(".right-bar input[type=checkbox]").forEach(function(t){t.checked=!1});var t,e,n,o,i,a,r,s,l=this.config;l&&(t=document.querySelector("input[type=checkbox][name=leftbar-color][value="+l.leftbar.color+"]"),e=document.querySelector("input[type=checkbox][name=leftbar-size][value="+l.leftbar.size+"]"),n=document.querySelector("input[type=checkbox][name=menu-position][value="+l.menu.position+"]"),o=document.querySelector("input[type=checkbox][name=layout-color][value="+l.layout.color+"]"),i=document.querySelector("input[type=checkbox][name=layout-width][value="+l.layout.width+"]"),a=document.querySelector("input[type=checkbox][name=layout-mode][value="+l.layout.type+"]"),r=document.querySelector("input[type=checkbox][name=topbar-color][value="+l.topbar.color+"]"),s=document.querySelector("input[type=checkbox][name=sidebar-user]"),t&&(t.checked=!0),e&&(e.checked=!0),n&&(n.checked=!0),o&&(o.checked=!0),i&&(i.checked=!0),a&&(a.checked=!0),r&&(r.checked=!0),s&&"true"===l.sidebar.user.toString()&&(s.checked=!0))},e.prototype.init=function(){this.initConfig(),this.initSwitchListener(),this.initWindowSize(),window.themeCustomizer=this},t.ThemeCustomizer=new e,t.ThemeCustomizer.Constructor=e}(window.jQuery),function(a){"use strict";function t(){}t.prototype.initTooltipPlugin=function(){a.fn.tooltip&&a('[data-bs-toggle="tooltip"]').tooltip()},t.prototype.initPopoverPlugin=function(){a.fn.popover&&a('[data-bs-toggle="popover"]').popover()},t.prototype.initToastPlugin=function(){a.fn.toast&&a('[data-bs-toggle="toast"]').toast()},t.prototype.initFormValidation=function(){a(".needs-validation").on("submit",function(t){return a(this).addClass("was-validated"),!1!==a(this)[0].checkValidity()||(t.preventDefault(),t.stopPropagation(),!1)})},t.prototype.initCounterUp=function(){var n=a(this).attr("data-delay")?a(this).attr("data-delay"):100,o=a(this).attr("data-time")?a(this).attr("data-time"):1200;a('[data-plugin="counterup"]').each(function(t,e){a(this).counterUp({delay:n,time:o})})},t.prototype.initPeityCharts=function(){a('[data-plugin="peity-pie"]').each(function(t,e){var n=a(this).attr("data-colors")?a(this).attr("data-colors").split(","):[],o=a(this).attr("data-width")?a(this).attr("data-width"):20,i=a(this).attr("data-height")?a(this).attr("data-height"):20;a(this).peity("pie",{fill:n,width:o,height:i})}),a('[data-plugin="peity-donut"]').each(function(t,e){var n=a(this).attr("data-colors")?a(this).attr("data-colors").split(","):[],o=a(this).attr("data-width")?a(this).attr("data-width"):20,i=a(this).attr("data-height")?a(this).attr("data-height"):20;a(this).peity("donut",{fill:n,width:o,height:i})}),a('[data-plugin="peity-donut-alt"]').each(function(t,e){a(this).peity("donut")}),a('[data-plugin="peity-line"]').each(function(t,e){a(this).peity("line",a(this).data())}),a('[data-plugin="peity-bar"]').each(function(t,e){var n=a(this).attr("data-colors")?a(this).attr("data-colors").split(","):[],o=a(this).attr("data-width")?a(this).attr("data-width"):20,i=a(this).attr("data-height")?a(this).attr("data-height"):20;a(this).peity("bar",{fill:n,width:o,height:i})})},t.prototype.initKnob=function(){a('[data-plugin="knob"]').each(function(t,e){a(this).knob()})},t.prototype.initTippyTooltips=function(){0<a('[data-plugin="tippy"]').length&&tippy('[data-plugin="tippy"]')},t.prototype.initShowPassword=function(){a("[data-password]").on("click",function(){"false"==a(this).attr("data-password")?(a(this).siblings("input").attr("type","text"),a(this).attr("data-password","true"),a(this).addClass("show-password")):(a(this).siblings("input").attr("type","password"),a(this).attr("data-password","false"),a(this).removeClass("show-password"))})},t.prototype.initMultiDropdown=function(){a(".dropdown-menu a.dropdown-toggle").on("click",function(t){return a(this).next().hasClass("show")||a(this).parents(".dropdown-menu").first().find(".show").removeClass("show"),a(this).next(".dropdown-menu").toggleClass("show"),!1})},t.prototype.init=function(){this.initTooltipPlugin(),this.initPopoverPlugin(),this.initToastPlugin(),this.initFormValidation(),this.initCounterUp(),this.initPeityCharts(),this.initKnob(),this.initTippyTooltips(),this.initShowPassword(),this.initMultiDropdown()},a.Components=new t,a.Components.Constructor=t}(window.jQuery),function(i){"use strict";function t(){this.$body=i("body"),this.$portletIdentifier=".card",this.$portletCloser='.card a[data-toggle="remove"]',this.$portletRefresher='.card a[data-toggle="reload"]'}t.prototype.init=function(){var o=this;i(document).on("click",this.$portletCloser,function(t){t.preventDefault();var e=i(this).closest(o.$portletIdentifier),n=e.parent();e.remove(),0==n.children().length&&n.remove()}),i(document).on("click",this.$portletRefresher,function(t){t.preventDefault();var e=i(this).closest(o.$portletIdentifier);e.append('<div class="card-disabled"><div class="card-portlets-loader"></div></div>');var n=e.find(".card-disabled");setTimeout(function(){n.fadeOut("fast",function(){n.remove()})},500+5*Math.random()*300)})},i.Portlet=new t,i.Portlet.Constructor=t}(window.jQuery),function(n){"use strict";function t(){this.$body=n("body"),this.$window=n(window)}t.prototype.initControls=function(){function t(){document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement||n("body").removeClass("fullscreen-enable")}n(window).on("load",function(){n("#status").fadeOut(),n("#preloader").delay(350).fadeOut("slow")}),n('[data-toggle="fullscreen"]').on("click",function(t){t.preventDefault(),n("body").toggleClass("fullscreen-enable"),document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}),document.addEventListener("fullscreenchange",t),document.addEventListener("webkitfullscreenchange",t),document.addEventListener("mozfullscreenchange",t)},t.prototype.init=function(){n.Portlet.init(),n.Components.init(),this.initControls(),this.layout=n.LayoutThemeApp,this.rightBar=n.RightBar,this.rightBar.layout=this.layout,this.layout.rightBar=this.rightBar,this.layout.init(),this.rightBar.init(this.layout);var t=this.$body.data("layout");window.sessionStorage&&t&&t.hasOwnProperty("showRightSidebarOnPageLoad")&&t.showRightSidebarOnPageLoad&&(sessionStorage.getItem("_UBOLD_VISITED_")||(n.RightBar.toggleRightSideBar(),sessionStorage.setItem("_UBOLD_VISITED_",!0)));[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(t){return new bootstrap.Popover(t)}),[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(t){return new bootstrap.Tooltip(t)}),[].slice.call(document.querySelectorAll(".toast")).map(function(t){return new bootstrap.Toast(t)});var e=document.getElementById("toastPlacement");e&&document.getElementById("selectToastPlacement").addEventListener("change",function(){e.dataset.originalClass||(e.dataset.originalClass=e.className),e.className=e.dataset.originalClass+" "+this.value})},n.App=new t,n.App.Constructor=t}(window.jQuery),function(){"use strict";window.jQuery.App.init()}(),Waves.init(),feather.replace();