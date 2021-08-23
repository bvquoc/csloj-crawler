**<center>NGUỒN: Bài tập Bồi dưỡng HSGQG, Hải Phòng, T11/2020, Thái BK</center>**

Năm $2060$ công nghệ của con người đã đạt được những thành tựu vượt bậc. Robot giờ đây đã rất phổ biến, chúng giúp đỡ con người trong hầu hết các công việc hàng ngày. Các robot dọn vệ sinh được bày bán khắp nơi. Những robot này được lập trình sẵn để hút bụi trong các căn phòng. Để robot hiểu được, căn phòng sẽ được chia thành lưới ô vuông $n × m$, các dòng đánh số từ $1$ đến $n$ từ trên xuống dưới, các cột đánh số từ $1$ đến $m$ từ trái sang phải. Các vật dụng trong nhà sẽ được xem là các vật cản trên lưới, robot không thể đi vào. Để di chuyển trong căn phòng, chúng ta có bốn lệnh điều khiển, là sang trái, lên trên, sang phải, hay xuống dưới. Tức là robot sẽ đi sang ô kề cạnh với ô đang đứng (trên lưới, không có vật cản). Để hút bụi, có một lệnh là hút bụi, robot sẽ thực hiện hút bụi ở ngay ô đang đứng Hiện tại có một robot đã được lập trình sẵn để hút bụi trong một căn phòng. Tuy nhiên chủ nhân của nó lại đổi ý, ông không muốn nó làm sạch căn phòng vốn quen thuộc của mình nữa. Giải pháp của ông là mua một robot khác, gọi là “robot cản phá”, robot này không có khả năng hút bụi, nó chỉ được lập trình để di chuyển trong căn phòng. Quy cách lập trình để di chuyển của nó cũng giống như robot kia. Sau đó đồng thời khởi động $2$ robot.

Trước khi khởi động robot hút bụi, ông có một ngày để lập trình cho robot cản phá, để nó sẽ nhanh chóng bắt được robot hút bụi nhất (thời điểm mà hai robot nằm vào cùng một ô là sớm nhất). Vì giống nhau về quy cách lập trình, chúng sẽ làm việc đồng thời, tức là robot này thực hiện một lệnh thì robot kia cũng thực hiện một lệnh, cùng thời điểm, mất một đơn vị thời gian.

Cho cách lập trình của robot hút bụi, liệu bạn có lập trình được robot cản phá?

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên $n, m$;
- Tiếp theo là một ma trận $n$ dòng $m$ cột mô tả về các vật cản trong phòng. Ký tự thứ $j$ trên dòng $i$ là $0/1$ tương ứng là ô $i, j$ không có/có vật cản;
- Dòng tiếp theo ghi hai số nguyên $x, y$ là vị trí sẽ đặt robot hút bụi;
- Tiếp theo là một chuỗi $S$ mô tả lập trình cho robot hút bụi, gồm các ký tự `L`,`R`,`U`,`D`,`C` tương ứng là sang trái, sang phải, lên trên, xuống dưới, hút bụi;
- Dòng cuối cùng ghi hai số nguyên $z, t$ là vị trí sẽ đặt robot cản phá.

## Dữ liệu ra:
- Nếu không thể cản phá được (tức dù ông lập trình robot cản phá ra sao, thì robot hút bụi cũng có thể thực hiện hết chuỗi lệnh của mình), in ra $-1$. Ngược lại, in ra thời điểm sớm nhất cản phá được.

## Ví dụ:
### Dữ liệu vào:
```
4 4
0000
0000
0000
0000
4 4
UUCLDCL
1 1
```

### Dữ liệu ra:
```
6
```

### Dữ liệu vào:
```
3 2
00
00
00
3 2
UDUDUDUDUDUDUDUDUDUDUDUDLRLRLRUUDCC
1 1
```

### Dữ liệu ra:
```
34
```

### Dữ liệu vào:
```
4 5
-1
00100
00100
01000
00000
4 5
UUCLDCL
1 1
```

### Dữ liệu ra:
```
-1
```

## Giới hạn:
- $1 ≤ n, m ≤ 100, 1 ≤ |S| ≤ 1000$;
- Có $50\%$ test ứng với $1 ≤ n, m ≤ 50$.