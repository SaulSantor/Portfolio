from flask import Blueprint, render_template, redirect, url_for, flash, request
from flask_login import login_user, logout_user, login_required, current_user

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/about')
def about():
    return render_template('about.html')

@main.route('/contact')
def contact():
    return render_template('contact.html')

@main.route('/project')
def project():
    return render_template('project.html')

@main.route('/skills')
def skills():
    return render_template('skills.html')

@main.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404