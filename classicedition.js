
// ============================================================================
// INLINE SVG GRAPHICS & DATA URIs (Replaces all missing images/*.png files)
// ============================================================================
var SVG_ASSETS = (function() {
	function toDataUri(svgString) {
		return "data:image/svg+xml;utf8," + encodeURIComponent(svgString.trim());
	}

	var closeSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" fill="#ef4444" stroke="#ffffff" stroke-width="2"/><path d="M10 10L22 22M22 10L10 22" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/></svg>';
	var arrowSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M6 8L24 16L6 24L10 16Z" fill="#f59e0b" stroke="#ffffff" stroke-width="2" stroke-linejoin="round"/></svg>';
	var houseSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 22"><path d="M14 2L2 12H6V20H22V12H26L14 2Z" fill="#16a34a" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round"/><rect x="11" y="13" width="6" height="7" fill="#dcfce7"/></svg>';
	var hotelSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 22"><path d="M15 1L1 10H4V21H26V10H29L15 1Z" fill="#dc2626" stroke="#fef08a" stroke-width="1.5" stroke-linejoin="round"/><rect x="8" y="11" width="4" height="4" fill="#fef08a"/><rect x="18" y="11" width="4" height="4" fill="#fef08a"/><rect x="12" y="15" width="6" height="6" fill="#fef08a"/></svg>';
	var ccSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="8" y="22" width="48" height="32" rx="4" fill="#d97706" stroke="#78350f" stroke-width="3"/><path d="M8 24C8 14 56 14 56 24Z" fill="#fbbf24" stroke="#78350f" stroke-width="3"/><rect x="27" y="20" width="10" height="12" rx="2" fill="#fef08a" stroke="#78350f" stroke-width="2"/></svg>';
	var chanceSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" fill="#ea580c" stroke="#ffffff" stroke-width="3"/><text x="32" y="46" font-family="Outfit, Arial, sans-serif" font-weight="900" font-size="42" text-anchor="middle" fill="#ffffff">?</text></svg>';
	var goArrowSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 44"><path d="M130 22H26M26 22L44 8M26 22L44 36" stroke="#dc2626" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>';
	var freeParkingSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M10 38L16 22H48L54 38V50H46V44H18V50H10V38Z" fill="#ef4444" stroke="#1e293b" stroke-width="3" stroke-linejoin="round"/><circle cx="20" cy="38" r="5" fill="#fef08a"/><circle cx="44" cy="38" r="5" fill="#fef08a"/><path d="M18 24L22 32H42L46 24Z" fill="#bae6fd"/></svg>';
	var taxSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><polygon points="32,6 54,24 32,58 10,24" fill="#38bdf8" stroke="#0284c7" stroke-width="3"/><polyline points="10,24 54,24" stroke="#e0f2fe" stroke-width="2"/><polyline points="22,6 32,24 42,6" stroke="#e0f2fe" stroke-width="2"/></svg>';
	var trainSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="14" y="24" width="36" height="22" rx="4" fill="#1e293b"/><rect x="36" y="12" width="14" height="14" fill="#334155"/><rect x="18" y="14" width="8" height="10" fill="#dc2626"/><circle cx="22" cy="48" r="7" fill="#dc2626" stroke="#ffffff" stroke-width="2"/><circle cx="42" cy="48" r="7" fill="#dc2626" stroke="#ffffff" stroke-width="2"/><path d="M8 46L14 38V46Z" fill="#64748b"/></svg>';
	var electricSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 8C20 8 14 17 14 26C14 33 19 38 22 43H42C45 38 50 33 50 26C50 17 44 8 32 8Z" fill="#facc15" stroke="#ca8a04" stroke-width="3"/><rect x="24" y="45" width="16" height="8" rx="2" fill="#64748b"/><path d="M29 22L25 32H33L29 40" stroke="#ffffff" stroke-width="3" fill="none" stroke-linecap="round"/></svg>';
	var waterSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 10C32 10 14 32 14 44C14 54 22 58 32 58C42 58 50 54 50 44C50 32 32 10 32 10Z" fill="#0ea5e9" stroke="#0369a1" stroke-width="3"/><path d="M24 42C24 47 27 50 32 50" stroke="#bae6fd" stroke-width="3" fill="none" stroke-linecap="round"/></svg>';
	var jailIconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="24" r="12" fill="#fed7aa" stroke="#1e293b" stroke-width="3"/><path d="M16 54C16 42 48 42 48 54" fill="#1e3a8a" stroke="#1e293b" stroke-width="3"/><path d="M18 16H46L42 8H22Z" fill="#1e3a8a" stroke="#1e293b" stroke-width="2"/></svg>';

	function makeDieSvg(spots) {
		var dots = {
			1: [[32, 32]],
			2: [[18, 18], [46, 46]],
			3: [[16, 16], [32, 32], [48, 48]],
			4: [[18, 18], [46, 18], [18, 46], [46, 46]],
			5: [[18, 18], [46, 18], [32, 32], [18, 46], [46, 46]],
			6: [[18, 15], [46, 15], [18, 32], [46, 32], [18, 49], [46, 49]]
		}[spots] || [[32, 32]];
		var circles = "";
		for (var i = 0; i < dots.length; i++) {
			var fill = (spots === 1) ? "#dc2626" : "#0f172a";
			var r = (spots === 1) ? 7.5 : 5.5;
			circles += '<circle cx="' + dots[i][0] + '" cy="' + dots[i][1] + '" r="' + r + '" fill="' + fill + '"/>';
		}
		var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect x="2" y="2" width="60" height="60" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>' + circles + '</svg>';
		return toDataUri(svg);
	}

	return {
		close: toDataUri(closeSvg),
		arrow: toDataUri(arrowSvg),
		house: toDataUri(houseSvg),
		hotel: toDataUri(hotelSvg),
		cc: toDataUri(ccSvg),
		chance: toDataUri(chanceSvg),
		goArrow: toDataUri(goArrowSvg),
		freeParking: toDataUri(freeParkingSvg),
		tax: toDataUri(taxSvg),
		train: toDataUri(trainSvg),
		electric: toDataUri(electricSvg),
		water: toDataUri(waterSvg),
		jail: toDataUri(jailIconSvg),
		dice: [null, makeDieSvg(1), makeDieSvg(2), makeDieSvg(3), makeDieSvg(4), makeDieSvg(5), makeDieSvg(6)],
		raw: {
			train: trainSvg,
			electric: electricSvg,
			water: waterSvg,
			cc: ccSvg,
			chance: chanceSvg,
			tax: taxSvg,
			freeParking: freeParkingSvg,
			jail: jailIconSvg
		}
	};
})();

// ============================================================================
// SYNTHESIZED WEB AUDIO SOUND ENGINE & CONFETTI FX
// ============================================================================
var SoundFX = (function() {
	var ctx = null;
	var enabled = true;

	function getCtx() {
		if (!enabled) return null;
		if (!ctx) {
			var AudioCtx = window.AudioContext || window.webkitAudioContext;
			if (AudioCtx) ctx = new AudioCtx();
		}
		if (ctx && ctx.state === "suspended") {
			ctx.resume();
		}
		return ctx;
	}

	function playTone(freq, type, duration, delay, gainVal) {
		var c = getCtx();
		if (!c) return;
		try {
			var osc = c.createOscillator();
			var gain = c.createGain();
			osc.type = type || "sine";
			osc.frequency.setValueAtTime(freq, c.currentTime + (delay || 0));
			gain.gain.setValueAtTime(gainVal || 0.12, c.currentTime + (delay || 0));
			gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + (delay || 0) + duration);
			osc.connect(gain);
			gain.connect(c.destination);
			osc.start(c.currentTime + (delay || 0));
			osc.stop(c.currentTime + (delay || 0) + duration);
		} catch (e) {}
	}

	return {
		toggle: function() {
			enabled = !enabled;
			return enabled;
		},
		isEnabled: function() { return enabled; },
		dice: function() {
			for (var i = 0; i < 5; i++) {
				playTone(220 + Math.random() * 280, "triangle", 0.05, i * 0.055, 0.1);
			}
		},
		hop: function() {
			playTone(440, "sine", 0.06, 0, 0.08);
		},
		cashGain: function() {
			playTone(587.33, "sine", 0.1, 0, 0.12);
			playTone(880, "sine", 0.22, 0.08, 0.14);
		},
		cashLoss: function() {
			playTone(330, "sawtooth", 0.14, 0, 0.08);
			playTone(246.94, "sawtooth", 0.22, 0.1, 0.08);
		},
		buy: function() {
			playTone(523.25, "triangle", 0.12, 0, 0.14);
			playTone(659.25, "triangle", 0.12, 0.09, 0.14);
			playTone(783.99, "triangle", 0.14, 0.18, 0.14);
			playTone(1046.5, "triangle", 0.3, 0.27, 0.16);
		},
		card: function() {
			playTone(480, "sine", 0.08, 0, 0.1);
			playTone(720, "sine", 0.15, 0.06, 0.1);
		},
		jail: function() {
			playTone(440, "sawtooth", 0.22, 0, 0.12);
			playTone(311.13, "sawtooth", 0.35, 0.2, 0.12);
		}
	};
})();

function triggerConfetti(count) {
	var canvas = document.getElementById("fx-canvas");
	if (!canvas) return;
	var ctx = canvas.getContext("2d");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	var particles = [];
	var colors = ["#f59e0b", "#10b981", "#3b82f6", "#ef4444", "#a855f7", "#ec4899"];
	var n = count || 45;
	for (var i = 0; i < n; i++) {
		particles.push({
			x: window.innerWidth * 0.45 + (Math.random() - 0.5) * 200,
			y: window.innerHeight * 0.45 + (Math.random() - 0.5) * 100,
			vx: (Math.random() - 0.5) * 11,
			vy: -Math.random() * 10 - 3,
			size: Math.random() * 7 + 4,
			color: colors[Math.floor(Math.random() * colors.length)],
			rot: Math.random() * Math.PI * 2,
			vrot: (Math.random() - 0.5) * 0.25,
			alpha: 1
		});
	}
	var frame = 0;
	function step() {
		frame++;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		var alive = false;
		for (var i = 0; i < particles.length; i++) {
			var p = particles[i];
			p.x += p.vx;
			p.y += p.vy;
			p.vy += 0.32;
			p.rot += p.vrot;
			p.alpha -= 0.014;
			if (p.alpha > 0) {
				alive = true;
				ctx.save();
				ctx.globalAlpha = Math.max(0, p.alpha);
				ctx.translate(p.x, p.y);
				ctx.rotate(p.rot);
				ctx.fillStyle = p.color;
				ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
				ctx.restore();
			}
		}
		if (alive && frame < 90) {
			requestAnimationFrame(step);
		} else {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
	}
	requestAnimationFrame(step);
}

function showToast(message) {
	var container = document.getElementById("toast-container");
	if (!container) return;
	var el = document.createElement("div");
	el.className = "game-toast";
	el.textContent = message;
	container.appendChild(el);
	setTimeout(function() {
		if (el.parentNode) el.parentNode.removeChild(el);
	}, 3200);
}

// ============================================================================
// SQUARE & CARD CONSTRUCTORS + EDITION DEFINITIONS (CLASSIC & NEW YORK CITY)
// ============================================================================
var currentEdition = "classic";

function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

var square = [];
var communityChestCards = [];
var chanceCards = [];

function loadClassicEdition() {
	currentEdition = "classic";
	square[0] = new Square("GO", "COLLECT $200 SALARY AS YOU PASS.", "#FFFFFF");
	square[1] = new Square("Mediterranean Avenue", "$60", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
	square[2] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
	square[3] = new Square("Baltic Avenue", "$60", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);
	square[4] = new Square("City Tax", "Pay $200", "#FFFFFF");
	square[5] = new Square("Reading Railroad", "$200", "#FFFFFF", 200, 1);
	square[6] = new Square("Oriental Avenue", "$100", "#38bdf8", 100, 4, 6, 30, 90, 270, 400, 550);
	square[7] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
	square[8] = new Square("Vermont Avenue", "$100", "#38bdf8", 100, 4, 6, 30, 90, 270, 400, 550);
	square[9] = new Square("Connecticut Avenue", "$120", "#38bdf8", 120, 4, 8, 40, 100, 300, 450, 600);
	square[10] = new Square("Just Visiting", "", "#FFFFFF");
	square[11] = new Square("St. Charles Place", "$140", "#ec4899", 140, 5, 10, 50, 150, 450, 625, 750);
	square[12] = new Square("Electric Company", "$150", "#FFFFFF", 150, 2);
	square[13] = new Square("States Avenue", "$140", "#ec4899", 140, 5, 10, 50, 150, 450, 625, 750);
	square[14] = new Square("Virginia Avenue", "$160", "#ec4899", 160, 5, 12, 60, 180, 500, 700, 900);
	square[15] = new Square("Pennsylvania Railroad", "$200", "#FFFFFF", 200, 1);
	square[16] = new Square("St. James Place", "$180", "#f97316", 180, 6, 14, 70, 200, 550, 750, 950);
	square[17] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
	square[18] = new Square("Tennessee Avenue", "$180", "#f97316", 180, 6, 14, 70, 200, 550, 750, 950);
	square[19] = new Square("New York Avenue", "$200", "#f97316", 200, 6, 16, 80, 220, 600, 800, 1000);
	square[20] = new Square("Free Parking", "", "#FFFFFF");
	square[21] = new Square("Kentucky Avenue", "$220", "#ef4444", 220, 7, 18, 90, 250, 700, 875, 1050);
	square[22] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
	square[23] = new Square("Indiana Avenue", "$220", "#ef4444", 220, 7, 18, 90, 250, 700, 875, 1050);
	square[24] = new Square("Illinois Avenue", "$240", "#ef4444", 240, 7, 20, 100, 300, 750, 925, 1100);
	square[25] = new Square("B&O Railroad", "$200", "#FFFFFF", 200, 1);
	square[26] = new Square("Atlantic Avenue", "$260", "#eab308", 260, 8, 22, 110, 330, 800, 975, 1150);
	square[27] = new Square("Ventnor Avenue", "$260", "#eab308", 260, 8, 22, 110, 330, 800, 975, 1150);
	square[28] = new Square("Water Works", "$150", "#FFFFFF", 150, 2);
	square[29] = new Square("Marvin Gardens", "$280", "#eab308", 280, 8, 24, 120, 360, 850, 1025, 1200);
	square[30] = new Square("Go to Jail", "Go directly to Jail. Do not pass GO. Do not collect $200.", "#FFFFFF");
	square[31] = new Square("Pacific Avenue", "$300", "#16a34a", 300, 9, 26, 130, 390, 900, 1100, 1275);
	square[32] = new Square("North Carolina Avenue", "$300", "#16a34a", 300, 9, 26, 130, 390, 900, 1100, 1275);
	square[33] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
	square[34] = new Square("Pennsylvania Avenue", "$320", "#16a34a", 320, 9, 28, 150, 450, 1000, 1200, 1400);
	square[35] = new Square("Short Line", "$200", "#FFFFFF", 200, 1);
	square[36] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
	square[37] = new Square("Park Place", "$350", "#2563eb", 350, 10, 35, 175, 500, 1100, 1300, 1500);
	square[38] = new Square("LUXURY TAX", "Pay $100", "#FFFFFF");
	square[39] = new Square("Boardwalk", "$400", "#2563eb", 400, 10, 50, 200, 600, 1400, 1700, 2000);

	communityChestCards[0] = new Card("Get out of Jail, Free. This card may be kept until needed or sold.", function(p) { p.communityChestJailCard = true; updateOwned();});
	communityChestCards[1] = new Card("You have won second prize in a beauty contest. Collect $10.", function() { addamount(10, 'Community Chest');});
	communityChestCards[2] = new Card("From sale of stock, you get $50.", function() { addamount(50, 'Community Chest');});
	communityChestCards[3] = new Card("Life insurance matures. Collect $100.", function() { addamount(100, 'Community Chest');});
	communityChestCards[4] = new Card("Income tax refund. Collect $20.", function() { addamount(20, 'Community Chest');});
	communityChestCards[5] = new Card("Holiday fund matures. Receive $100.", function() { addamount(100, 'Community Chest');});
	communityChestCards[6] = new Card("You inherit $100.", function() { addamount(100, 'Community Chest');});
	communityChestCards[7] = new Card("Receive $25 consultancy fee.", function() { addamount(25, 'Community Chest');});
	communityChestCards[8] = new Card("Pay hospital fees of $100.", function() { subtractamount(100, 'Community Chest');});
	communityChestCards[9] = new Card("Bank error in your favor. Collect $200.", function() { addamount(200, 'Community Chest');});
	communityChestCards[10] = new Card("Pay school fees of $50.", function() { subtractamount(50, 'Community Chest');});
	communityChestCards[11] = new Card("Doctor's fee. Pay $50.", function() { subtractamount(50, 'Community Chest');});
	communityChestCards[12] = new Card("It is your birthday. Collect $10 from every player.", function() { collectfromeachplayer(10, 'Community Chest');});
	communityChestCards[13] = new Card("Advance to \"GO\" (Collect $200).", function() { advance(0);});
	communityChestCards[14] = new Card("You are assessed for street repairs. $40 per house. $115 per hotel.", function() { streetrepairs(40, 115);});
	communityChestCards[15] = new Card("Go to Jail. Go directly to Jail. Do not pass \"GO\". Do not collect $200.", function() { gotojail();});

	chanceCards[0] = new Card("GET OUT OF JAIL FREE. This card may be kept until needed or traded.", function(p) { p.chanceJailCard=true; updateOwned();});
	chanceCards[1] = new Card("Make General Repairs on All Your Property. For each house pay $25. For each hotel $100.", function() { streetrepairs(25, 100);});
	chanceCards[2] = new Card("Speeding fine $15.", function() { subtractamount(15, 'Chance');});
	chanceCards[3] = new Card("You have been elected chairman of the board. Pay each player $50.", function() { payeachplayer(50, 'Chance');});
	chanceCards[4] = new Card("Go back three spaces.", function() { gobackthreespaces();});
	chanceCards[5] = new Card("ADVANCE TO THE NEAREST UTILITY. IF UNOWNED, you may buy it from the Bank. IF OWNED, throw dice and pay owner a total ten times the amount thrown.", function() { advanceToNearestUtility();});
	chanceCards[6] = new Card("Bank pays you dividend of $50.", function() { addamount(50, 'Chance');});
	chanceCards[7] = new Card("ADVANCE TO THE NEAREST RAILROAD. If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", function() { advanceToNearestRailroad();});
	chanceCards[8] = new Card("Pay poor tax of $15.", function() { subtractamount(15, 'Chance');});
	chanceCards[9] = new Card("Take a trip to Reading Rail Road. If you pass \"GO\" collect $200.", function() { advance(5);});
	chanceCards[10] = new Card("ADVANCE to Boardwalk.", function() { advance(39);});
	chanceCards[11] = new Card("ADVANCE to Illinois Avenue. If you pass \"GO\" collect $200.", function() { advance(24);});
	chanceCards[12] = new Card("Your building loan matures. Collect $150.", function() { addamount(150, 'Chance');});
	chanceCards[13] = new Card("ADVANCE TO THE NEAREST RAILROAD. If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", function() { advanceToNearestRailroad();});
	chanceCards[14] = new Card("ADVANCE to St. Charles Place. If you pass \"GO\" collect $200.", function() { advance(11);});
	chanceCards[15] = new Card("Go to Jail. Go Directly to Jail. Do not pass \"GO\". Do not collect $200.", function() { gotojail();});
}

function loadNewYorkCityEdition() {
	currentEdition = "nyc";
	square[0] = new Square("GO", "COLLECT $200 SALARY AS YOU PASS.", "#FFFFFF");
	square[1] = new Square("Port Authority Bus Terminal", "$60", "#4B0082", 60, 3, 2, 10, 30, 90, 160, 250);
	square[2] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
	square[3] = new Square("Lincoln Tunnel", "$60", "#4B0082", 60, 3, 4, 20, 60, 180, 320, 450);
	square[4] = new Square("City Tax", "PAY 10% OR $200", "#FFFFFF");
	square[5] = new Square("LOMTO", "$200", "#FFFFFF", 200, 1);
	square[6] = new Square("Statue of Liberty", "$100", "#38bdf8", 100, 4, 6, 30, 90, 270, 400, 550);
	square[7] = new Square("Chance", "NEW YORK LOTTERY GAMES", "#FFFFFF");
	square[8] = new Square("Empire State Building", "$100", "#38bdf8", 100, 4, 6, 30, 90, 270, 400, 550);
	square[9] = new Square("Central Park", "$120", "#38bdf8", 120, 4, 8, 40, 100, 300, 450, 600);
	square[10] = new Square("Just Visiting", "", "#FFFFFF");
	square[11] = new Square("98.7 Kiss FM", "$140", "#ec4899", 140, 5, 10, 50, 150, 450, 625, 750);
	square[12] = new Square("Con Edison Electric", "$150", "#FFFFFF", 150, 2);
	square[13] = new Square("Thirteen WNET", "$140", "#ec4899", 140, 5, 10, 50, 150, 450, 625, 750);
	square[14] = new Square("The New York Times", "$160", "#ec4899", 160, 5, 12, 60, 180, 500, 700, 900);
	square[15] = new Square("New York City Transit", "$200", "#FFFFFF", 200, 1);
	square[16] = new Square("New York Rangers", "$180", "#f97316", 180, 6, 14, 70, 200, 550, 750, 950);
	square[17] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
	square[18] = new Square("New York Knicks", "$180", "#f97316", 180, 6, 14, 70, 200, 550, 750, 950);
	square[19] = new Square("Madison Square Garden", "$200", "#f97316", 200, 6, 16, 80, 220, 600, 800, 1000);
	square[20] = new Square("Free Parking", "", "#FFFFFF");
	square[21] = new Square("macy*s", "$220", "#ef4444", 220, 7, 18, 90, 250, 700, 875, 1050);
	square[22] = new Square("Chance", "NEW YORK LOTTERY GAMES", "#FFFFFF");
	square[23] = new Square("FAO Schwarz", "$220", "#ef4444", 220, 7, 18, 90, 250, 700, 875, 1050);
	square[24] = new Square("bloomingdale's", "$240", "#ef4444", 240, 7, 20, 100, 300, 750, 925, 1100);
	square[25] = new Square("Metro-North Railroad", "$200", "#FFFFFF", 200, 1);
	square[26] = new Square("Deloitte & Touche LLP", "$260", "#eab308", 260, 8, 22, 110, 330, 800, 975, 1150);
	square[27] = new Square("SmithBarney", "$260", "#eab308", 260, 8, 22, 110, 330, 800, 975, 1150);
	square[28] = new Square("Con Edison Gas", "$150", "#FFFFFF", 150, 2);
	square[29] = new Square("CITIBANK", "$280", "#eab308", 280, 8, 24, 120, 360, 850, 1025, 1200);
	square[30] = new Square("Go to Jail", "Go directly to Jail. Do not pass GO. Do not collect $200.", "#FFFFFF");
	square[31] = new Square("The Regency Hotel", "$300", "#16a34a", 300, 9, 26, 130, 390, 900, 1100, 1275);
	square[32] = new Square("Essex House", "$300", "#16a34a", 300, 9, 26, 130, 390, 900, 1100, 1275);
	square[33] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
	square[34] = new Square("The Plaza", "$320", "#16a34a", 320, 9, 28, 150, 450, 1000, 1200, 1400);
	square[35] = new Square("United Airlines", "$200", "#FFFFFF", 200, 1);
	square[36] = new Square("Chance", "NEW YORK LOTTERY GAMES", "#FFFFFF");
	square[37] = new Square("Tiffany & CO.", "$350", "#2563eb", 350, 10, 35, 175, 500, 1100, 1300, 1500);
	square[38] = new Square("LUXURY TAX", "Pay $75", "#FFFFFF");
	square[39] = new Square("TRUMP TOWER", "$400", "#2563eb", 400, 10, 50, 200, 600, 1400, 1700, 2000);

	communityChestCards[0] = new Card("Get out of Jail, Free. This card may be kept until needed or sold.", function(p) { p.communityChestJailCard = true; updateOwned();});
	communityChestCards[1] = new Card("You have won lifetime home delivery of the New York Times. Collect $10", function() { addamount(10, 'Community Chest');});
	communityChestCards[2] = new Card("From sale of Macy's stock, you get $45", function() { addamount(45, 'Community Chest');});
	communityChestCards[3] = new Card("Life insurance matures. Collect $100", function() { addamount(100, 'Community Chest');});
	communityChestCards[4] = new Card("Deloitte & Touche LLP tax return Collect $20", function() { addamount(20, 'Community Chest');});
	communityChestCards[5] = new Card("FAO Schwarz Xmas fund matures. Collect $100", function() { addamount(100, 'Community Chest');});
	communityChestCards[6] = new Card("You have won a United Airlines trip around the world! Collect $100", function() { addamount(100, 'Community Chest');});
	communityChestCards[7] = new Card("Performed a wedding at the Plaza Hotel. Receive $25", function() { addamount(25, 'Community Chest');});
	communityChestCards[8] = new Card("Pay hospital $100", function() { subtractamount(100, 'Community Chest');});
	communityChestCards[9] = new Card("You won the Lottery! Collect $200", function() { addamount(200, 'Community Chest');});
	communityChestCards[10] = new Card("Pay school tax of $150", function() { subtractamount(150, 'Community Chest');});
	communityChestCards[11] = new Card("Doctor's fee. Pay $50", function() { subtractamount(50, 'Community Chest');});
	communityChestCards[12] = new Card("Madison Square Garden opening tonight. Collect $50 from every player for opening night seats.", function() { collectfromeachplayer(50, 'Community Chest');});
	communityChestCards[13] = new Card("You have won kiss cash! Advance to GO (Collect $200)", function() { advance(0);});
	communityChestCards[14] = new Card("You are assessed for street repairs. $40 per house. $115 per hotel.", function() { streetrepairs(40, 115);});
	communityChestCards[15] = new Card("Go to Jail. Go directly to Jail. Do not pass GO. Do not collect $200.", function() { gotojail();});

	chanceCards[0] = new Card("Get out of Jail free. This card may be kept until needed or sold.", function(p) { p.chanceJailCard=true; updateOwned();});
	chanceCards[1] = new Card("Make general repairs on all your property. For each house pay $25. For each hotel $100.", function() { streetrepairs(25, 100);});
	chanceCards[2] = new Card("Pay poor tax of $15.", function() { subtractamount(15, 'Chance');});
	chanceCards[3] = new Card("You have been elected chairman of Con Edison. Pay each player $50.", function() { payeachplayer(50, 'Chance');});
	chanceCards[4] = new Card("Go back 3 spaces.", function() { gobackthreespaces();});
	chanceCards[5] = new Card("Advance token to the nearest Con Edison utility. If UNOWNED you may buy it from the bank. If OWNED, throw dice and pay owner a total of ten times the amount thrown.", function() { advanceToNearestUtility();});
	chanceCards[6] = new Card("Citibank pays you interest of $50.", function() { addamount(50, 'Chance');});
	chanceCards[7] = new Card("Advance token to the nearest Transportation and pay owner Twice the Rental to which they are otherwise entitled. If Transportation is unowned, you may buy it from the Bank.", function() { advanceToNearestRailroad();});
	chanceCards[8] = new Card("Take a walk past The Essex House. Advance to GO. Collect $200.", function() { advance(0,32);});
	chanceCards[9] = new Card("Take a ride to the Regency Hotel! If you pass GO collect $200.", function() { advance(31);});
	chanceCards[10] = new Card("Take a walk on fifth avenue. Advance token to Trump Tower.", function() { advance(39);});
	chanceCards[11] = new Card("Advance to thirteen.", function() { advance(13);});
	chanceCards[12] = new Card("Your Smith Barney mutual fund pays dividend. Collect $150.", function() { addamount(150, 'Chance');});
	chanceCards[13] = new Card("Advance token to the nearest Transportation and pay owner Twice the Rental to which they are otherwise entitled.\n\nIf Transportation is unowned, you may buy it from the Bank.", function() { advanceToNearestRailroad();});
	chanceCards[14] = new Card("Catch a bus to Central Park. If you pass GO, collect $200.", function() { advance(9);});
	chanceCards[15] = new Card("Go directly to Jail. Do not pass GO, do not collect $200.", function() { gotojail();});
}

function corrections() {
	if (currentEdition === "classic") {
		document.getElementById("cell1name").textContent = "Mediter-ranean Ave";
	} else {
		document.getElementById("cell24name").textContent = "blooming-dale's";
	}

	document.getElementById("enlarge5token").innerHTML = '<img src="' + SVG_ASSETS.train + '" height="54" width="54" alt="" />';
	document.getElementById("enlarge15token").innerHTML = '<img src="' + SVG_ASSETS.train + '" height="54" width="54" alt="" />';
	document.getElementById("enlarge25token").innerHTML = '<img src="' + SVG_ASSETS.train + '" height="54" width="54" alt="" />';
	document.getElementById("enlarge35token").innerHTML = '<img src="' + SVG_ASSETS.train + '" height="54" width="54" alt="" />';
	document.getElementById("enlarge12token").innerHTML = '<img src="' + SVG_ASSETS.electric + '" height="54" width="48" alt="" />';
	document.getElementById("enlarge28token").innerHTML = '<img src="' + SVG_ASSETS.water + '" height="54" width="54" alt="" />';
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;If one "Utility" is owned rent is 4 times amount shown on dice.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;If both "Utilities" are owned rent is 10 times amount shown on dice.';
}

function transtext() {
	var label = (currentEdition === "nyc") ? "Transportations" : "Railroads";
	return '<div style="font-size: 13px; line-height: 1.55;">Rent<span style="float: right;">$25.</span><br />If 2 ' + label + ' are owned<span style="float: right;">50.</span><br />If 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />If 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
}

function luxurytax() {
	var fee = (currentEdition === "nyc") ? 75 : 100;
	addAlert(player[turn].name + " paid $" + fee + " for landing on Luxury Tax.");
	player[turn].pay(fee, 0);
	$("#landed").show().text("You landed on Luxury Tax. Pay $" + fee + ".");
}

function citytax() {
	var p = player[turn];
	if (currentEdition === "nyc") {
		if (p.human) {
			var buttonAonclick = 'payCityTaxFlat();';
			var buttonBonclick = 'payCityTaxPercent();';
			popup("You landed on City Tax. You must pay $200 or ten percent of your total worth.<div><input type='button' value='Pay $200' onclick='" + buttonAonclick + "' /><input type='button' value='Pay 10%' onclick='" + buttonBonclick + "' /></div>", "blank");
		} else {
			addAlert(p.name + " paid $200 for landing on City Tax.");
			p.pay(200, 0);
		}
	} else {
		addAlert(p.name + " paid $200 for landing on City Tax.");
		p.pay(200, 0);
		$("#landed").show().text("You landed on City Tax. Pay $200.");
	}
}

function payCityTaxFlat() {
	$("#popupwrap").hide();
	$("#popupbackground").fadeOut(300);
	var p = player[turn];
	addAlert(p.name + " paid $200 for landing on City Tax.");
	p.pay(200, 0);
}

function payCityTaxPercent() {
	$("#popupwrap").hide();
	$("#popupbackground").fadeOut(300);
	var p = player[turn];
	var cost = p.money;
	for (var i = 0; i < 40; i++) {
		var sq = square[i];
		if (sq.owner == turn) {
			if (sq.mortgage) {
				cost += sq.price * 0.5;
			} else {
				cost += sq.price;
			}
			cost += (sq.house * sq.houseprice);
		}
	}
	cost *= 0.1;
	cost = Math.round(cost);
	addAlert(p.name + " paid $" + cost + " for landing on City Tax.");
	p.pay(cost, 0);
}

// Initialize Classic Edition by default on load
loadClassicEdition();
