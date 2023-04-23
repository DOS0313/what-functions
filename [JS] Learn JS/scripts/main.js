const player = {
    name: "DO_S",
    points: 12400,
    premium: true,
    status: "Im Stressed..."
}

console.log("닉네임 : " + player.name)

player.premium = false

console.log("프리미엄 등록 여부 : " + player.premium)

console.log("닉네임 변경 중...")

player.name = "Dos_0313";

console.log(player.name)