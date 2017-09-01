require 'rails_helper'

RSpec.feature "Instructions Page", type: :feature do
  scenario "User can can see the instrctions to the game" do
    visit ('/instruction')
    expect(page).to have_content("To win you need to max the relationship hearts")
  end
end
