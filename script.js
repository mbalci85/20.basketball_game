//Basketball team scores

let player1Scores = [110, 90, 100];
let player2Scores = [120, 70, 110];

const winner = (player1, player2, player1Scores, player2Scores) => {
	let player1Avg = Math.round(
		player1Scores.reduce((acc, val) => acc + val, 0) / player1Scores.length,
	);

	let player2Avg = Math.round(
		player2Scores.reduce((acc, val) => acc + val, 0) / player2Scores.length,
	);

	if (player1Avg > player2Avg) {
		alert(
			`${player1}'s team wins against to ${player2}'s team with average score of ${player1Avg} points to ${player2Avg} points`,
		);
	} else if (player1Avg < player2Avg) {
		alert(
			`${player2}'s team wins against to ${player1}'s team with average score of ${player2Avg} points to ${player1Avg} points`,
		);
	} else {
		alert(
			`There is draw since both ${player1}'s and ${player2}'s teams scored average score of ${player1Avg}`,
		);
	}
};

winner('Mike', 'John', player1Scores, player2Scores);
