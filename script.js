var food_calories=[]

var workout_calories=[]

var mntc_calories

var fitness_goal

function submit_fitness_goals()
{
    var get_fitness_goal= document.getElementById("goal").value

    fitness_goal=get_fitness_goal

    var get_mtnc_calories= document.getElementById("user_maintain_calories").value

    mntc_calories= get_mtnc_calories

    var get_display_mntc_calories= document.getElementById("display_mntc_calories")

    get_display_mntc_calories.style.backgroundColor="rgba(3, 3, 3, 0.6)"

    get_display_mntc_calories.innerHTML= "Your maintainance calories are: "+get_mtnc_calories+"<br>"


        if(Number(get_mtnc_calories)<1500)
        {
            alert("Maintanance calories are too less. Eating less than 1500 calories per day is harmful for your health")

            get_display_mntc_calories.innerHTML="Maintainance calories are too less"

            return -1
        }
        

    

        if(get_fitness_goal==="fat-loss")
            {
                get_display_mntc_calories.append("Chosen goal: Fat Loss")
            } 

        if(get_fitness_goal==="weight-gain")
            {
                get_display_mntc_calories.append("Chosen goal: Weight and Muscle Gain")
            } 

        if(get_fitness_goal==="maintain")
            {
                get_display_mntc_calories.append("Chosen goal: Maintain current weight")
            }     

    event.preventDefault()
}

function make_new_food_item_entry()
{
    var get_food_name= document.getElementById("food_name").value

    var get_food_calories= Number(document.getElementById("calorie_amount").value)


    food_calories.push(get_food_calories)



    var make_div_for_food_name= document.createElement("div")

    make_div_for_food_name.setAttribute("class", "class_food_name")

    make_div_for_food_name.textContent= get_food_name



    var make_div_for_food_calories= document.createElement("div")

    make_div_for_food_calories.setAttribute("class", "class_food_calories")

    make_div_for_food_calories.textContent= get_food_calories



    document.getElementById("display_food_name").append(make_div_for_food_name)

    document.getElementById("display_food_calories").append(make_div_for_food_calories)


   


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
    

    

    console.log(food_calories)


    event.preventDefault()
}


function update_calories_consumed()
{
    var get_display_cal_consumed= document.getElementById("display_cal_consumed")


    var total=0

    for(i=0;i<food_calories.length;i++)
    {
        total=total+food_calories[i]
    }

    get_display_cal_consumed.innerHTML= total

    
    
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



    make_div_for_workout_name.setAttribute("class", "class_wrkt_name")

    make_div_for_calories_burned.setAttribute("class", "class_cal_brnd")




    workout_calories.push(get_calories_burned)


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


function update_calories_burned()
{

    var get_display_cal_burned= document.getElementById("display_cal_burned")

    var total2=0

    for(i=0;i<workout_calories.length;i++)
    {
        total2=total2+workout_calories[i]
    }

    get_display_cal_burned.innerHTML= total2

    

}


function check_progress()
{
    var get_mtnc_calories_for_check= mntc_calories



    var get_total_calories_consumed= Number(document.getElementById("display_cal_consumed").textContent)



    var get_total_calories_burned= Number(document.getElementById("display_cal_burned").textContent)



    var get_display_progress= document.getElementById("display_cal_diff")

    var get_display_message= document.getElementById("display_message")

    var caloric_diff= Math.abs(get_total_calories_consumed-get_total_calories_burned)

    console.log(caloric_diff, "This is cal diff")

    get_display_progress.textContent= caloric_diff

        if(fitness_goal==="fat-loss")
            {
                if(caloric_diff>=mntc_calories)
                {
                    get_display_message.textContent="You won't lose fat if you keep eating like this. Please reduce your caloric intake by atleast 250 calories per day to lose fat"
                }

                if(caloric_diff<mntc_calories)
                {
                    get_display_message.textContent="Congratulations, you are in a caloric deficit. Keep it up. Also please still eat more than 1500 calories a day to remain healthy"
                }

            }

        if(fitness_goal==="weight-gain")
            {
                if(caloric_diff>=mntc_calories)
                {
                    get_display_message.textContent="Congratulations, you have consumed more calories than your maintainance calories. This will help you put on weight/muscle. Please continue to eat healthy and in limits"

                }

                if(caloric_diff<mntc_calories)
                {
                    get_display_message.textContent= "You ate too less today to meet your goal of weight/muscle gain."
                }
               
            }

            if(fitness_goal==="maintain")
            {
               if(caloric_diff===mntc_calories)
               {
                   get_display_message.textContent= "Congratulations, you have eaten enough to meet your maintainace calorie amount for the day."
               }

               else if(caloric_diff>mntc_calories)
               {
                   get_display_message.textContent= "You are eating more than your maintainance calories"
               }

               else if(caloric_diff<mntc_calories)
               {
                   get_display_message.textContent= "You are eating less than your maintainance calories"
               }

            }
}