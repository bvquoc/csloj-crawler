**<center>NGUỒN: ĐỀ KIỂM TRA ĐỘI TUYỂN 2019-2020 (Bài tập của thầy LÊ MINH HOÀNG - THPT Chuyên ĐHSP HN)</center>**
<br>

Giáo sư $X$ dạo này đang rất bận rộn và căng thẳng do phải cân bằng giữa việc giảng dạy trên trường với việc chăm sóc, đào tạo cậu út $\#S$ của mình trở thành một **Superkid** đích thực. Đối với giáo sư, một **Superkid** đích thực thì trước hết phải biết tô màu, cụ thể là màu nước. Do vướng bận việc trường lớp nên Giáo sư $X$ phải thuê một bảo mẫu có khả năng giúp mình theo dõi quá trình rèn luyện của $\#S$ một cách thật sát sao. Không may thay, người đó chính là bạn. Nhiệm vụ của bạn là phải trải một số tờ giấy vẽ hình chữ nhật ra sàn nhà theo đúng yêu cầu của Giáo sư sao cho không có $2$ tờ giấy nào có chung góc hoặc cạnh và các cạnh của các tờ giấy không giao nhau (các tờ giấy có thể đặt chồng lên nhau) rồi quan sát $\#S$ luyện tập. 
Quá trình luyện tập của $\#S$ bao gồm $M$ thao tác, trong mỗi thao tác cậu ta dùng cọ vẽ của mình và chấm một điểm bằng một màu bất kì. Do $\#S$ dùng màu nước đã quá hạn sử dụng nên mỗi khi chấm lên một tờ giấy, những tờ giấy ở dưới tờ giấy đó cũng sẽ bị thấm bằng màu tương ứng. Giáo sư $X$ yêu cầu bạn phải thống kê được có bao nhiêu màu đã được tô trên mỗi tờ giấy mà không được nhấc từng tờ giấy lên do điều đó sẽ cản trở việc luyện tập của $\#S$.
Nói tóm lại, sàn nhà của Giáo sư $X$ có thể coi như một hệ tọa độ Oxy rộng vô hạn, trong đó các tờ giấy được biểu diễn như các hình chữ nhật có cạnh song song với trục tọa độ. Mỗi thao tác của $\#S$ được biểu diễn như một điểm trong hệ tọa độ đó. Lưu ý, $\#S$ có thể chấm lên sàn nhà do cậu vẫn còn khá hậu đậu. Dữ liệu đảm bảo các điểm biểu diễn thao tác của $\#S$ là đôi một khác nhau.

## Dữ liệu vào
- Dòng đầu tiên của là hai số nguyên dương $N,M\ (1≤N,M≤80000)$ – Lần lượt là số lượng tờ giấy và số thao tác của $\#S$.
- Dòng thứ $i$ trong $N$ dòng tiếp theo gồm $4$ số nguyên: tọa độ của đỉnh trái dưới $(A_i,B_i)$ và phải trên $(C_i,D_i)$ của tờ giấy vẽ thứ $i$. $\left(1≤A_i,B_i,C_i,D_i≤ 10^9\right)$
- Dòng thứ $j$ trong $M$ dòng tiếp theo là $3$ số nguyên $X_j,Y_j$ và $K_j$ tương ứng là tọa độ biểu diễn một thao tác của $\#S$ và màu mà cậu ta chọn để thực hiện thao tác đó. $\left(1≤ X_j,Y_j,K_j≤10^9\right)$

## Dữ liệu ra:
- Ghi ra $N$ dòng, dòng thứ $i$ trong $N$ dòng chứa một số nguyên – Số lượng màu đã được tô trên tờ giấy thứ $i$.

## Ví dụ:
#### Dữ liệu vào:
```
2 2
1 1 3 3
5 6 10 10
3 3 1
5 1 2
```

#### Dữ liệu ra:
```
0
1
```

#### Dữ liệu vào:
```
3 3
1 1 7 7
2 2 6 6
3 3 5 5
4 4 1
2 6 2
4 7 3
```

#### Dữ liệu ra:
```
3
2
1
```

#### Giải thích:
<center><img src="/images/problems/1135/paint.png" width=50%></center>

<center>Hình minh họa cho test trên</center>

#### Dữ liệu vào:
```
1 3
1 1 7 7
2 6 2
4 7 3
4 4 1
```

#### Dữ liệu ra:
```
3
```