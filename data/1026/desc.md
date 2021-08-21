**<center>NGUỒN: Ôn HN tháng 11/2017, Thầy Nguyễn Đức Nghĩa, Ngày 1</center>**
<br>

Bờm vừa mới nhận được một khoản tiền thù lao lớn từ bản thiết kế công viên giải trí trong thành phố. Bây giờ, Bờm muốn sử dụng khoản tiền này để đầu tư vào việc phát triển chuỗi cửa hàng bán thực phẩm sạch. Bờm quyết định mua một dãy các cửa hàng liên tiếp dọc theo đại lộ thương mại của thành phố.

Để có được quyền sử dụng một cửa hàng trên đại lộ này, Bờm phải trả tiền cho chủ sở hữu hiện tại của nó. Tuy nhiên, cũng có một số cửa hàng do việc kinh doanh thua lỗ trong nhiều năm, chủ sở hữu của nó đồng ý nhượng lại quyền sử dụng cho Bờm chỉ để cắt lỗ, thậm chí còn trả tiền để hỗ trợ chủ mới thuê cửa hàng của mình. Cụ thể, dọc theo đại lộ có $N$ cửa hàng liên tiếp được đánh số từ $1$ đến $N$ theo thứ tự đi dọc theo đại lộ. Cửa hàng thứ $i$ gắn với số nguyên $s_i$ là chi phí mà Bờm phải trả để có được quyền sử dụng nó. Nếu $s_i$ là số âm thì điều đó có nghĩa là Bờm không những không phải trả tiền mà còn được chủ sở hữu của cửa hàng $i$ hỗ trợ lượng tiền là $s_i$ để thay chủ cũ tiếp tục sử dụng cửa hàng này.

**Yêu cầu**: Biết $S$ là tổng lượng tiền mà Bờm có thể chi cho việc mở hoạt động kinh doanh, hãy giúp Bờm xác định cách mua được dãy gồm một số nhiều nhất các cửa hàng liên tiếp trên đại lộ với tổng chi phí không vượt quá $S$. Thông tin này sẽ hỗ trợ Bờm rất nhiều trong việc lựa chọn cách đầu tư tối ưu.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương $N$ và $S\ (N ≤ 5.10^5; S ≤ 10^9)$ theo thứ tự là số lượng cửa hàng trên đại lộ và tổng lượng tiền mà Bờm có thể đầu tư;
- Dòng thứ hai chữa dãy số nguyên $s_1, s_2, …, s_n\ (| s_i | ≤ 10^6)$ là lượng tiền Bờm phải chi (hoặc thu được nếu là số âm) để sở hữu các cửa hàng tương ứng.

## Dữ liệu ra:
- Ghi ra hai số nguyên $a$ và $b$, trong đó $a$ là số lượng cửa hàng trong cách mua tìm được, còn $b$ là chỉ số của cửa hàng đầu tiên trong dãy các cửa hàng liên tiếp tìm được (nếu có nhiều dãy như vậy hãy đưa ra dãy với chỉ số $b$ là nhỏ nhất).

## Ví dụ:
#### Dữ liệu vào:
```
15 666
101 42 -132 17 404 -13 55 222 89 11 -66 91 -9 21 4
```
#### Dữ liệu ra:
```
10 2
```

#### Giải thích:
- Có thể mua dãy $10$ cửa hàng liên tiếp bắt đầu từ cửa hàng thứ $2$ (có giá $42$) với tổng chi phí là $42 – 132 + 17 + 404 – 13 + 55 + 222 + 89 + 11 – 66 = 629$ (không vượt quá tổng vốn đầu tư $666$). Có thể mua dãy $10$ cửa hàng liên tiếp bắt đầu từ cửa hàng $6$ với chi phí nhỏ hơn $(-13 + 55 + 222 + 89 + 11 – 66 + 91 – 9 + 21 + 4 = 405)$, nhưng bạn cần đưa ra lời giải với chỉ số của cửa hàng bắt đầu là nhỏ nhất.