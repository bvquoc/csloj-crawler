**<center>Nguồn: Free Contest 7</center>**

Đề án thay thế cây xanh Hà Nội được ban hành tháng ~8/2013~ với mục tiêu chặt hạ thay thế ~6.700~ cây xanh tại nhiều tuyến phố nội đô. Dự án đã thực hiện tại một số tuyến phố Huế, Hàng Bài, Kim Mã, Giảng Võ... Nhưng khi thành phố Hà Nội thực hiện chặt hạ thay thế ~381~ cây xanh trên phố Nguyễn Chí Thanh thì bị dư luận phản ứng dữ dội. Chủ tịch thành phố Nguyễn Thế Thảo đã yêu cầu tạm dừng đề án và tổ chức thanh tra.
<center><img src="/images/problems/2057/seq_1.png" width=48% /><img src="/images/problems/2057/seq_2.png" width=52% /></center>

Trước kia, trên đường NT, có rất nhiều cây xanh. Tuy nhiên, để thực hiện việc xây đường sắt trên cao tuyến CL-HĐ, một số cây xanh trên đường cần được chặt bỏ.

Mỗi cây xanh có một giá trị khác nhau. Tuy nhiên, để giữ lại bóng mát cho người dân, chính quyền quyết định, không được chặt quá ~k~ cây liên tiếp. Nói cách khác, cứ mỗi ~k~ cây liên tiếp thì ít nhất phải còn lại một cây không bị chặt.

Số tiền lớn nhất có thể thu được sau khi chặt cây là bao nhiêu?

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương ~n~ và ~k~, trong đó ~n~ là số cây xanh trên đường NT ~(1 ≤ n ≤ 6700, 1 ≤ k ≤ 1000)~;
- Dòng tiếp theo chứa ~n~ số nguyên dương, là giá trị của các cây xanh dọc theo con đường. Giá trị của mỗi cây xanh không vượt quá ~1000~.

## Dữ liệu ra:
- In ra số tiền lớn nhất có thể thu được sau việc chặt cây.

## Ví dụ:
#### Dữ liệu vào:
```
5 2
10 10 20 20 10
```

#### Dữ liệu ra:
```
40
```