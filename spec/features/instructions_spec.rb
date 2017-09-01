require 'rails_helper'

RSpec.feature "Instructions Page", type: :feature do
  scenario "User can can see the instrctions to the game" do
    visit ('/instruction')
    expect(page).to have_content("Instructions Congratulations you have a date! However, love does not come cheap. To impress your date you will have to wine dine and shower them in gifts. Fill up all the hearts and your hearts desire will be yours. Play the Game")
  end
end
