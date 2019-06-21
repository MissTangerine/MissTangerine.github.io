$(document).ready(function(){
	$("#t1").click(function(){
		$("#t1").addClass("change");
		$("#t2").removeClass("change");
		$("#t3").removeClass("change");
		$("#t4").removeClass("change");
		$("#t5").removeClass("change");

		$("#c0").addClass("hidd");
	});
	$("#t2").click(function(){
		$("#t1").removeClass("change");
		$("#t2").addClass("change");
		$("#t3").removeClass("change");
		$("#t4").removeClass("change");
		$("#t5").removeClass("change");

		$("#c0").addClass("hidd");
	});
	$("#t3").click(function(){
		$("#t1").removeClass("change");
		$("#t2").removeClass("change");
		$("#t3").addClass("change");
		$("#t4").removeClass("change");
		$("#t5").removeClass("change");

		$("#c0").addClass("hidd");
	});
	$("#t4").click(function(){
		$("#t1").removeClass("change");
		$("#t2").removeClass("change");
		$("#t3").removeClass("change");
		$("#t4").addClass("change");
		$("#t5").removeClass("change");

		$("#c0").addClass("hidd");
	});
	$("#t5").click(function(){
		$("#t1").removeClass("change");
		$("#t2").removeClass("change");
		$("#t3").removeClass("change");
		$("#t4").removeClass("change");
		$("#t5").addClass("change");

		$("#c0").addClass("hidd");
	});
})