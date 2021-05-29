from django import template
from core.models import Order,Item

register = template.Library()


@register.filter(name='currency')
def currency(number):
	return "₹ "+str(number)
