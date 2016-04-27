/* Japanese initialisation for the jQuery UI date picker plugin. */
/* Written by Kentaro SATO (kentaro@ranvis.com). */
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.ja = {
	closeText: "閉じる",
	prevText: "&#x3C;前",
	nextText: "次&#x3E;",
	currentText: "今日",
	monthNames: [ "1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月" ],
	monthNamesShort: [ "1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月" ],
	dayNames: [ "日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日" ],
	dayNamesShort: [ "日","月","火","水","木","金","土" ],
	dayNamesMin: [ "日","月","火","水","木","金","土" ],
	weekHeader: "週",
	dateFormat: "yy/mm/dd",
	// firstDay: 0, // 週の初めは日曜
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: "年",

	// jquery-workshop customized.
	firstDay: 1, // 週の初めは月曜
	showButtonPanel: true, // "今日"ボタン, "閉じる"ボタンを表示する
	showAnim: 'slideDown', // カレンダーを表示する際のアニメーション指定
	beforeShow: function(input, inst) { // カレンダーを必ず下側へ表示させるための表示位置計算function
		var top  = $(this).offset().top + $(this).outerHeight();
		var left = $(this).offset().left;
		setTimeout(function() {
			inst.dpDiv.css({
				'top' : top,
				'left': left
			});
		}, 10) // 10msec
	}	
};
datepicker.setDefaults( datepicker.regional.ja );

return datepicker.regional.ja;

} ) );
