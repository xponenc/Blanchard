$(document).ready(function() {
    $('.contact-form__btn').on('click', function() {
        let name = $('.contact-form__input-box [name="name"]').val()
        let phone = $('.contact-form__input-box [name="phone"]').val()
        phone = phone.slice(1, 2) + phone.slice(3, 6) + phone.slice(8, 11) + phone.slice(12, 14) + phone.slice(15)
        console.log(phone)
        let request = {
            'name': name,
            'phone': phone,
        }
        $.post('api.php', request, function(responce) {
            if (responce == '1') {
                $('.contact-form__input-box[name="name"]').val('')
                $('.contact-form__input-box[phone="phone"]').val('')
                // Вывести успешное сообщение
                alert('Ваша заявка успешно принята')

            } else {
                alert('Ошибка отправки формы')
            }
        })

    })
})