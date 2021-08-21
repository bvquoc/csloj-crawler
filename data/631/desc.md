**<center>Nguồn: Beginner Free Contest 7</center>**

Thuật toán điểm giữa là một trong những thuật toán phổ biến được dùng để tạo bản đồ địa hình cho các trò chơi như OpenTTD, Age of Empires, ....

Để thực hiện thuật toán này, đầu tiên chương trình cần phải lấy bốn điểm là bốn đỉnh của một hình vuông, mỗi điểm sẽ được gán với một độ cao bất kì. Sau đó, ở vòng lặp đầu tiên, chương trình thực hiện hai bước sau:
1. Với mỗi cạnh của hình vuông, chương trình lấy thêm một điểm là trung điểm của cạnh đó. Độ cao của điểm này là trung bình cộng của độ cao hai đầu mút của cạnh đang xét.
2. Sau khi xử lí cả bốn cạnh, chương trình lấy thêm một điểm nữa là tâm của hình vuông. Độ cao của điểm là tổng của trung bình cộng của độ cao bốn đỉnh của hình vuông và một số rất nhỏ được lấy ngẫu nhiên.

Sau khi thực hiện hai bước trên, ta có được chín điểm tạo thành bốn hình vuông. Ở vòng lặp thứ hai, chương trình sẽ thực hiện hai bước trên với bốn hình vuông mới được tạo ra và cứ tiếp tục làm như vậy cho đến khi có được một bản đồ đủ chi tiết cho trò chơi.

Các thí sinh Free Contest hãy viết chương trình tính số điểm tạo bởi thuật toán này sau ~N~ vòng lặp.

## Dữ liệu vào:
- Gồm một dòng duy nhất chứa một số nguyên ~N\ (1 ≤N ≤15)~ là số vòng lặp mà thuật toán sẽ thực hiện.

## Dữ liệu ra:
- Gồm một dòng duy nhất chứa một số nguyên là số điểm tạo bởi thuật toán trên.

## Ví dụ:
#### Dữ liệu vào:
```
1
```

## Dữ liệu ra:
```
9
```

#### Dữ liệu vào:
```
2
```

## Dữ liệu ra:
```
25
```

#### Giải thích
- Hình dưới đây là kết quả của thuật toán trên sau vòng lặp thứ nhất và vòng lặp thứ hai. Các điểm được thêm vào ở mỗi vòng lặp được tô màu đen.
<center><img src="/images/problems/631/SQUARE.png" width=520px></center>