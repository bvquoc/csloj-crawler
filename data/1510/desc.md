**<center>NGUỒN: VOI 2017 - 2018</center>**
**<center>Test không chính thức (thầy Hồ Đắc Phương)</center>**

Trong trường học mà Sơn đang theo học có $N$ học sinh. Cũng giống như ở các trường học khác, trong trường của Sơn có người là đặc biệt có người thì không. Một học sinh muốn trở thành người đặc biệt cần giao tiếp với những học sinh đã là người đặc biệt. Sơn muốn xác định ai trong số các học sinh trong trường sẽ là người đặc biệt thông qua bảng thống kê về các lần trao đổi tin nhắn trên mạng xã hội. Chúng ta không cần quan tâm đến việc Sơn đã làm thế nào để có được bảng thống kê này. Vì bảng thống kê là quá lớn nên Sơn cần đến sự trợ giúp của máy tính. Theo qui tắc, nếu một học sinh chưa là đặc biệt mà trao đổi tin nhắn với ít ra là $K$ người đã là đặc biệt, mỗi người ít nhất một lần, thì học sinh đó sẽ trở thành người đặc biệt. Tiếc là do hạn chế của hệ thống thu thập thông tin nên Sơn chỉ ghi nhận được các tin nhắn đã được trao đổi giữa hai người mà không biết chính xác chúng được thực hiện ở các thời điểm nào.

**Yêu câu:** Biết danh sách những người đặc biệt lúc ban đầu (tức là trước khi tin nhắn đầu tiên trong bảng thống kê được thực hiện), hãy giúp Sơn xác định xem nhiều nhất có thể có bao nhiêu học sinh trở thành người đặc biệt và cụ thể đó là những người nào sau khi tất cả các tin nhắn trong bảng thống kê được thực hiện.

## Dữ liệu vào:
- Dòng đầu tiên chứa $4$ số nguyên được ghi cách nhau bởi dấu cách $N, K, S, M$ tương ứng là số lượng học sinh trong trường, số lượng người đặc biệt ít nhất mà một học sinh cần trao đổi tin nhắn với họ để trở thành người đặc biệt, số lượng người đặc biệt lúc ban đầu, số lượng tin nhắn trong bảng thống kê mà Sơn sở hữu;
- Dòng thứ hai chứa tên của $S$ người đặc biệt trong trường trước khi tin nhắn đầu tiên trong bảng thống kê được gửi đi, trong đó tên của mỗi người là dãy gồm không quá $10$ chữ cái latin in thường, hai tên liên tiếp được ghi cách nhau bởi một dẫu cách;
- Mỗi dòng trong số $M$ dòng cuối ghi nhận thông tin về một tin nhắn trao đổi giữa hai học sinh bao gồm hai tên của hai học sinh được ghi phân cách nhau bởi một dấu cách. Tên của các học sinh là đãy gồm không quá 10 chữ cái latin in thường. Lưu ý là thứ tự các tin nhắn được liệt kê không phải là theo trình tự thời gian mà chúng được gửi đi.

**Chú ý:**
- Việc trao đổi tin nhắn là hai chiều, nghĩa là nếu $A$ trao đổi tin nhắn với $B$ thì cũng có nghĩa là $B$ đã trao đỗi tin nhắn với $A$;
- Dữ liệu đảm bảo không có hai học sinh nào trùng tên và trong bảng thống kê không có tin nhắn giữa một người với chính mình.

## Dữ liệu ra:
- Dòng đầu tiên ghi tổng số người đặc biệt;
- Dòng thứ hai ghi tên của các người đặc biệt trong trường sau khi tất cả các tin nhắn trao đổi trong bảng thống kê được thực hiện với giả thiết là trình tự thời gian mà chúng được thực hiện là trình tự được liệt kê sao cho có nhiều người trở thành đặc biệt nhất. Tên của các người đặc biệt cần được liệt kê theo thứ tự từ điển tăng dần, hai tên liên tiếp được ghi cách nhau bởi một dấu cách.

## Giới hạn:
- Có $30\%$ số test ứng với $30\%$ số điểm của bài thỏa mãn điều kiện: $K= 1; S≤N≤100; 1≤M≤1000$;
- Có $40\%$ số test ứng với $40\%$ số điểm của bài thỏa mãn điều kiện: $1 ≤K≤S≤N<1000; 1 ≤M≤ 10000$;
- $30\%$ số test còn lại ứng với $30\%$ số điểm của bài thỏa mãn điều kiện: $1 ≤K≤S≤N≤10000; 1 ≤M≤ 100000$.

## Ví dụ:
#### Dữ liệu vào:
```
3 1 1 1
cuoi
son cuoi
```

#### Dữ liệu ra:
```
2
cuoi son
```

#### Dữ liệu vào:
```
9 2 3 6
san son rong
cuoi phuong
son anh
son cuoi
cuoi san
son phong
san phan
```

#### Dữ liệu ra:
```
5
cuoi phuong rong san son
```

#### Giải thích:
- Trong ví dụ thứ hai: Sau khi trao đổi tin nhắn với **son** và **san**, **cuoi** trở thành người đặc biệt. Tiếp đến trong bảng thống kê cả **son** và **cuoi** đều trao đổi tin nhắn với **phuong**, nên **phuong** cũng trở thành người đặc biệt. Lưu ý rằng: nếu như coi rằng **cuoi** trao đổi tin nhắn với **phuong** trước khi trở thành người đặc biệt (tức là trình tự thời gian thực hiện các tin nhắn là trình tự liệt kê trong dữ liệu) thì **phuong** sẽ không trở thành người đặc biệt được. Nhưng theo giả thiết đầu bài ta có thể xếp lại trình tự thực hiện các tin nhắn sao cho có được nhiều người đặc biệt nhất, nên tin nhắn này có thể coi là được thực hiện sau khi **cuoi** đã trở thành người đặc biệt. Trong ví dụ này có hai học sinh trong trường không trao đổi tin nhắn với bất cứ ai, vì thế tên của họ không xuất hiện trong bảng thống kê.