**<center>Nguồn: Beginner Free Contest 9</center>**

Giáo sư X đang gặp vấn đề trong việc đặt tên cho cậu con trai của mình. Giáo sư có $2$ xâu $s_1, s_2$ mà giáo sư cho là **xâu đẹp**. Giáo sư X muốn tên của con trai mình là xâu con chung (không nhất thiết phải liên tiếp) của hai xâu này.

Mặt khác, giáo sư X nhận thấy rằng những tên có thứ tự từ điển nhỏ thường hay bị gọi lên bảng trả bài, gây áp lực không tốt khi đi học cho con trai của mình. Vì thế giáo sư X muốn tên con trai mình có thứ tự từ điển lớn nhất có thể.

Nhắc lại một chút về thứ tự từ điển, một từ $a$ được gọi là có thứ tự từ điển lớn hơn từ $b$ nếu tồn tại một vị trí $i$ nào đó sao cho $i − 1$ kí tự đầu của $a$ giống với $i − 1$ kí tự đầu của $b$ và kí tự thứ $i$ của $a$ nằm sau kí tự thứ $i$ của $b$ trong bảng chữ cái. Nếu toàn bộ kí tự đầu của $b$ giống với các kí tự đầu $a$ thì $a$ có thứ tự từ điển lớn hơn $b$ nếu độ dài của $a$ lớn hơn độ dài của $b$. Ví dụ như xâu `yz` có thứ tự từ điển lớn hơn `yyab` và xâu `abc` có thứ tự từ điển lớn hơn xâu `ab`.

Vì độ dài hai xâu đẹp của giáo sư X khá lớn nên thầy vẫn chưa tìm ra tên sẽ đặt cho con mình được. Bạn sẽ giúp giáo sư chứ?

## Dữ liệu vào:
- Dữ liệu đầu vào gồm hai dòng, dòng đầu tiên chứa xâu $s_1$, dòng thứ hai chứa xâu $s_2$. Hai xâu này chỉ gồm những chứ cái in thường. Dữ liệu đầu vào đảm bảo độ dài mỗi xâu không vượt quá $10^6$ và hai xâu luôn tồn tại ít nhất một xâu con chung khác rỗng.

### Dữ liệu ra:
- In ra tên giáo sư X sẽ đặt cho con trên một dòng.

## Ví dụ:
### Dữ liệu vào:
```
abcfeg
adbcxfpg
```

### Dữ liệu ra:
```
g
```

## Giới hạn:
- $10\%$ số test ứng với $10\%$ số điểm có độ dài các xâu không vượt quá $100$;
- $20\%$ số test khác ứng với $20\%$ số điểm có độ dài các xâu không vượt quá $1000$;
- $20\%$ số test khác ứng với $20\%$ số điểm có độ dài các xâu không vượt quá $5000$;
- $50\%$ số test còn lại không có giới hạn gì thêm.