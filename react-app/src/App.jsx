import { Checkbox, Form, Input, InputNumber, Button } from 'antd'
import { Desktop, Tablet, Mobile, Default } from './Responsive'

export const App = () => {

    const onFinish = (values) => {
        console.log(values)
    }

    return (
        <div>
            <Desktop>Вы смотрите это на компьютере <Checkbox /></Desktop>
            <Tablet>Вы смотрите это на планшете <Input /></Tablet>
            <Mobile>Вы смотрите это на телефоне <Button /></Mobile>
            <Form
                name='auth'
                onFinish={onFinish}
                autoComplete='off'
            >
                <Form.Item
                    label='Login'
                    name='login'
                    rules={[
                        {
                            required: true,
                            message: 'Заполните поле логин'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Password'
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: 'Заполните поле пароль'
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label='Age'
                    name='age'
                    rules={[
                        {
                            required: true,
                            message: 'Заполните поле возраст'
                        }
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    name='remember'
                    valuePropName='checked'
                >
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button
                        type='primary'
                        htmlType='submit'
                    >
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default App