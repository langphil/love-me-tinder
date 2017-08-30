require 'rails_helper'

RSpec.feature "User Profile", type: :feature do
  scenario "User can set up a profile" do
    profile_set_up
    expect(page).to have_content("Welcome Eoin")
    expect { profile_set_up }.to change(Player, :count)
  end
end

def profile_set_up(name: "Eoin",
                    age: 62,
                    gender: "player_gender_male",
                    interest: "player_interest_female")
  visit "/player/new"
  fill_in "Name", with: name
  fill_in "Age", with: age
  choose(gender)
  choose(interest)
  click_button "Create player"
end
