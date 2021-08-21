MegaChip IV Tuyệt vời, vua của nước Baitotxia, muốn gả chồng cho công chúa Ađa. Công chúa muốn người chồng tương lai phải thông minh, không bủn xỉn nhưng cũng không hoang phí. Sau thời gian dài suy nghĩ, đức vua quyết định xây một cung điện gồm ~N~ phòng đánh số từ ~1~ đến ~N~ và có ~M~ hành lang hai chiều nối trực tiếp một số cặp phòng, phòng số ~W~ là phòng vào, phòng số ~K~ là phòng của công chúa.

Mỗi chàng trai được phát ~S~ đồng và phải chọn một hành trình qua một dãy các phòng (không nhất thiết là khác nhau) bắt đầu từ phòng vào, kết thúc ở phòng công chúa. Mỗi lần đến một phòng trên hành trình, cần phải trả một số tiền qui định đối với phòng đó. Chàng trai nào chọn được một hành trình mà khi đến phòng công chúa thì tiêu hết đúng ~S~ đồng sẽ được làm phò mã.

Đã nhiều năm trôi qua, chưa có chàng trai nào trở thành phò mã và công chúa Ađa vẫn còn đang chờ đợi người chồng lý tưởng của mình. Liệu bạn có thể giúp  một bạn trai thân thiết đang sống tại Baitotxia không?.

## Dữ liệu vào: 
- Dòng đầu tiên ghi ~5~ số nguyên dương ~N, M, W, K, S\ (1≤N≤100, 1≤M≤1000, 1≤K,W≤N, 1≤S≤1000)~;
- Dòng thứ hai ghi ~N~ số nguyên dương ~O_1, O_2, ..., O_N\ (1≤O_i≤1000)~, ~O_i~ là số tiền phải trả khi đến phòng thứ ~i~;
- ~M~ dòng tiếp theo, mỗi dòng ghi hai số nguyên dương ~X, Y\ (X≠Y, 1≤X, Y≤N)~, là hai phòng đầu mút của một hành lang.

## Dữ liệu ra:
- Một dòng viết dãy các phòng theo trình tự từ phòng đầu đến phòng công chúa.

## Ví dụ:
#### Dữ liệu vào:
```
5 6 3 4 9
1 2 3 4 5
2 4
5 4
1 5
1 2
2 3
3 1
```

#### Dữ liệu ra:
```
3 2 4
```