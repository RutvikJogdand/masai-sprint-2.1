function submit_fitness_goals()
{
    var get_fitness_goal= document.getElementById("goal").value

    var get_mtnc_calories= document.getElementById("user_maintain_calories").value

    var get_display_mntc_calories= document.getElementById("display_mntc_calories")

    get_display_mntc_calories.textContent= "Your maintainance calories are: "+get_mtnc_calories

    event.preventDefault()
}