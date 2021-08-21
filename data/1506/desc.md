**<center>NGUỒN: VOI 2017 - 2018</center>**
**<center>Test không chính thức (thầy Hồ Đắc Phương)</center>**

Chủ đề của cuộc thi ROBOCON năm nay là "Tìm đường thoát mê cung". Tuấn vừa chế tạo được một một robot để tham dự cuộc thi này. Tuấn rất thành thạo trong kỹ thuật chế tạo máy nhưng trong lập trình lại không được tốt như vậy. Do đó, Tuấn mới chỉ lập được một chương trình khá đơn giản để điều khiên robot của mình.

Robot di chuyển về phía trước với tốc độ $1$ mét/giây cho đến khi gặp vật cản. Khi gặp vật cản robot sẽ liên tiếp thực hiện quay trái $90$ độ cho đến khi trước mặt không có vật cản và lại tiếp tục di chuyển về phía trước. Thời gian để robot thực hiện đổi hướng chuyển động là cực nhanh, vì thế được coi bằng 0. Robot không bao giờ tự dừng chuyển động.

Để thử nghiệm robot, Tuấn đã xây dựng một mê cung trên một mặt sàn thi đấu rất rộng lớn. Mặt sàn có dạng một lưới ô vuông kích thước $1\times 1$ mét. Các cột của lưới được đánh số bới các số nguyên từ $-10^{10}$ đến $10^{10}$, từ trái qua phải. Các dòng của lưới được đánh số bởi các số nguyên từ $-10^{10}$ đến $10^{10}$, từ trên xuống dưới. Ô nằm trên giao của cột $x$ và dòng $y$ được gán với tọa độ $(x, y)$. Mê cung mà Tuấn xây dựng là một lưới con kích thước $N\times N$ với ô ở góc trái trên có tọa độ $(1, 1)$. Trong một số ô của mê cung có đặt vật cản, các ô còn lại là rỗng (không có vật cản).

Tuấn đặt robot của mình vào ô có tọa độ $(x, y)$, mặt robot quay về phía trên của lưới và cho robot chuyển động. Biết rằng vị trí mà Tuấn đặt robot không có vật cản và có ít nhất một ô chung cạnh với ô đặt robot là ô rỗng. Tuấn muốn xác định vị trí của robot sau $S$ giây.

**Yêu cầu:** Hãy giúp Tuấn giải quyết vấn đề đặt ra.

## Dữ liệu vào:
- Dòng đầu tiên chứa bốn số nguyên $N, x, y, S$ được ghi cách nhau bởi dấu cách $(1 ≤ N ≤ 1000, -10^5 \le x, y \le 10^5)$;
- $N$ dòng tiếp theo mô tả mê cung, mỗi dòng gồm $N$ ký hiệu được ghi liên tiếp nhau, mỗi ký hiệu được lấy từ tập $\{$`'#','.'`$\}$, trong đó ký hiệu `'#'` cho biết ô tương ứng trong mê cung có vật cản, còn ký hiệu `'.'` cho biết ô tương ứng trong mê cung là ô rỗng.

## Dữ liệu ra:
- Ghi ra hai số nguyên cách nhau bởi dấu cách là tọa độ ô mà robot đạt đến sau $S$ giây.

**Chú ý:** Ô xuất phát và ô mà robot đạt đến sau $S$ giây không nhất thiết phải nằm trong mê cung.

## Giới hạn:
- **Subtask** $\#1$ $(50\%\text{ số điểm}): 1 \le S \le 10^5$
- **Subtask** $\#2$ $(50\%\text{ số điểm}): 1 \le S \le 10^9$

## Ví dụ:
#### Dữ liệu vào:
```
4 3 5 9
###.
#...
#..#
##.#
```

#### Dữ liệu ra:
```
2 3
```

#### Dữ liệu vào:
```
3 2 5 7
###
#..
#..
```

#### Dữ liệu ra:
```
2 6
```

#### Giải thích:
- Hình 1a) minh họa cho ví dụ thứ nhất. Lưới con gồm các ô được tô nền xám là mê cung. Đường di chuyển của robot xuất phát từ ô $(3, 5)$ (ô có chữ $R$) qua các ô của sàn thi đấu được chỉ ra bởi các mũi tên. Trong ví dụ này ô xuất phát không thuộc mê cung. Sau $9$ giây robot đạt đến ô $(2, 3)$.
- Tương tự, hình 1b) minh họa đường di chuyển của robot trong ví dụ thứ hai: Robot xuất phát từ ô $(2,5)$ đạt đến ô $(2,6)$ sau $7$ giây.
<center><img src="/images/problems/1506/robot.png" width=700px></center>