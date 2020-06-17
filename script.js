var food_calories=[]

var workout_calories=[]

var mntc_calories

function submit_fitness_goals()
{
    var get_fitness_goal= document.getElementById("goal").value

    var get_mtnc_calories= document.getElementById("user_maintain_calories").value

    mntc_calories= get_mtnc_calories

    var get_display_mntc_calories= document.getElementById("display_mntc_calories")

    get_display_mntc_calories.textContent= "Your maintainance calories are: "+get_mtnc_calories

    event.preventDefault()
}

function make_new_food_item_entry()
{
    var get_food_name= document.getElementById("food_name").value

    var get_food_calories= Number(document.getElementById("calorie_amount").value)



    var make_div_for_food_name= document.createElement("div")

    make_div_for_food_name.textContent= get_food_name



    var make_div_for_food_calories= document.createElement("div")

    make_div_for_food_calories.textContent= get_food_calories



    document.getElementById("display_food_name").append(make_div_for_food_name)

    document.getElementById("display_food_calories").append(make_div_for_food_calories)



    var get_display_cal_consumed= document.getElementById("display_cal_consumed")



    food_calories.push(get_food_calories)

    var total=0

    for(i=0;i<food_calories.length;i++)
    {
        total=total+food_calories[i]
    }

    get_display_cal_consumed.textContent= total


    var delete_value_button= document.createElement('button')

    

    delete_value_button.setAttribute('class', 'deleteVl')

    delete_value_button.textContent="X"

    make_div_for_food_calories.append(delete_value_button)

    delete_value_button.addEventListener('click', delete_current_value)

        function delete_current_value()
        {
            make_div_for_food_name.remove()
            make_div_for_food_calories.remove()
            for(i=0;i<food_calories.length;i++)
            {
                if(food_calories[i]===get_food_calories)
                {
                    food_calories[i]=0
                    break
                }
            }
        }
    

    console.log(total)

    console.log(food_calories)


    event.preventDefault()
}


function make_new_workout_item_entry()
{
    var get_workout_name= document.getElementById("workout_name").value

    var get_calories_burned= Number(document.getElementById("calorie_amount_burned").value)



    var make_div_for_workout_name= document.createElement("div")

    make_div_for_workout_name.textContent= get_workout_name



    var make_div_for_calories_burned= document.createElement("div")

    make_div_for_calories_burned.textContent= get_calories_burned



    document.getElementById("display_workout_name").append(make_div_for_workout_name)

    document.getElementById("display_workout_calories").append(make_div_for_calories_burned)



    workout_calories.push(get_calories_burned)

    var get_display_cal_burned= document.getElementById("display_cal_burned")

    var total2=0

    for(i=0;i<workout_calories.length;i++)
    {
        total2=total2+workout_calories[i]
    }

    get_display_cal_burned.textContent= total2


    var delete_value_button= document.createElement('button')


    delete_value_button.setAttribute('class', 'deleteV2')

    delete_value_button.textContent="X"

    make_div_for_calories_burned.append(delete_value_button)

    delete_value_button.addEventListener('click', delete_current_value)

        function delete_current_value()
        {
            make_div_for_workout_name.remove()
            make_div_for_calories_burned.remove()
            for(i=0;i<workout_calories.length;i++)
            {
                if(workout_calories[i]===get_calories_burned)
                {
                    workout_calories[i]=0
                    break
                }
            }
        }

    console.log(workout_calories)

    event.preventDefault()
}