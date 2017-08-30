require 'rails_helper'

RSpec.feature 'Game', type: :feature do
  scenario 'can increase health by buying gift' do
    visit '/game'
    click_button 'gift'
    expect(page).to have_content("70")
  end
end
