**<center>NGUỒN: VOI 2019 - 2020</center>**
**<center>Test không chính thức (thầy Hồ Đắc Phương)</center>**

Xe buýt là một phương tiện giao thông phổ biến tại thành phố mà Alice sinh sống bởi tính tiện dụng và giá cả hợp lý của nó. Thành phố có $n$ bến xe buýt được đánh số từ $1$ đến $n$ và có $m$ tuyến xe buýt hai chiều, mỗi tuyến đang được điều hành bởi một trong hai công ty vận tải $A$ hoặc $B$. Cụ thể, tuyến thứ $i$ $(1≤i≤m)$ di chuyển giữa hai bến $u_i$ và $v_i$ với giá vé do công ty quản lý quy định là $w_i$. Lưu ý là giữa hai bến xe buýt có thể có nhiều hơn một tuyến xe buýt.

Hai công ty $A$ và $B$ đều có chính sách giảm giá vé cho những ai thường xuyên đi bằng xe buýt. Cụ thể, mỗi ngày công ty $A$ sẽ chỉ thu số tiền bằng với giá vé lớn nhất trong tất cả các tuyến được điều động bởi công ty $A$ mà khách hàng đã đi trong ngày. Để cạnh tranh, công ty $B$ cũng có chính sách tương tự: khách hàng cũng chỉ phải trả số tiền bằng giá vé lớn nhất trong tất cả các tuyến được điều hành bởi công ty $B$ mà người đó đã đi trong ngày.

Nhà Alice ở gần bến xe buýt $s$ và nơi làm của Alice ở gần bến xe buýt $t$ nên hàng ngày Alice đều phải đi lại giữa hai bến xe này thông qua các tuyến xe buýt.

**Yêu cầu:** Bạn hãy giúp Alice xác định số tiền nhỏ nhất cần bỏ ra mỗi ngày để đảm bảo việc đi từ bến xe buýt $s$ đến bến xe buýt $t$.

## Dữ liệu vào:
- Dòng đầu tiên chứa bốn số nguyên dương $n, m, s, t$ $(n, m ≤ 50000; s, t ≤ n; s≠t)$;
- Dòng thứ $i$ $(1≤i≤m)$ trong $m$ dòng tiếp theo chứa bốn số nguyên dương $c_i, u_i, v_i, w_i$ $(u_i, v_i ≤ n; u_i ≠ v_i; w_i\le 10^9)$ mô tả tuyến xe buýt thứ $i$, trong đó $c_i=1$ nếu tuyến này được điều hành bởi công ty $A$ hoặc $c_i=2$ nếu tuyến này được điều hành bởi công ty $B$.

Các số trên cùng dòng được ghi cách nhau bởi dấu cách. Dữ liệu đảm bảo luôn tồn tại cách đi lại giữa hai bến xe buýt $s$ và $t$ thông qua $m$ tuyến xe.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là số tiền nhỏ nhất cần bỏ ra mỗi ngày để đảm bảo được việc đi từ bến xe buýt $s$ đến bến xe buýt $t$ cho Alice.

## Giới hạn:
- Có $20\%$ số test ứng với $20\%$ số điểm của bài thỏa mãn điều kiện: Tất cả $m$ tuyến xe buýt được điều hành bởi công ty $A$;
- $30\%$ số test khác ứng với $30\%$ số điểm của bài thỏa mãn điều kiện: $n, m\le 5000$;
- $20\%$ số test ứng với $20\%$ số điểm của bài thỏa mãn điều kiện: tồn tại cách đi xe buýt tối ưu trong đó Alice chỉ sử dụng tối đa một tuyến xe của công ty $B$;
- $30\%$ số test còn lại ứng với $30\%$ số điểm của bài không có điều kiện gì thêm.

## Ví dụ:
#### Dữ liệu vào:
```
6 7 1 4
1 1 2 4
2 2 3 7
1 3 4 6
2 1 6 5
1 6 5 5
2 5 4 8
2 2 5 2
```

#### Dữ liệu ra:
```
12
```

#### Giải thích:
<center><img src = "/images/problems/1519/bus.png" width=500px></center>

- Để đi từ $1$ đến $4$, Alice sẽ lần lượt đi tuyến $(1, 2)$ của công ty $A$ và hai tuyến $2, 5), (5, 4)$ của công ty $B$. Khi đó số tiền mà Alice phải trả cho công ty $A$ là $4$ và trả cho công ty $B$ là $8$.