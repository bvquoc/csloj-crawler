**<center>NGUỒN: CONTEST PRACTICE VNOI20  (WEEK 1 - T11/2019)</center>**
<br>

**Số trung vị** cua một dãy số là một số tách giữa nửa lớn hơn và nửa bé hơn của một dãy số. Nó là giá trị giữa trong một dãy số, mà số các số nằm trên hay dưới con số đó là bằng nhau.

Để tìm **số trung vị** của một danh sách hữu hạn các số, ta xếp tăng dần tất cả các số trong dãy, rồi lấy giá trị nằm giữa danh sách nếu số phần tử là số lẻ. Nếu số phần tử là số chẵn, người ta thường lấy trung bình của hai giá trị nằm giữa. 

Thành phố T lúc nãy đã phát triển hơn. Thành phố lúc này có $N$ dãy số. Dãy phố thứ $i$ có $R_i$ tòa nhà. Tòa thứ $j$ trong dãy nhà thứ $i$ lúc này có $A_{ij}$ người sinh sống.

Người xưa có câu “Lao động là vinh quang”. Để thực hiện câu nói này, ngài thị trưởng đã lập lên một kế hoạch cho mọi người nhằm đưa thành phố phát triển lên một tầm cao mới. Kế hoạch diễn ra trong $W$ tuần, mỗi tuần ngài sẽ chọn hai dãy nhà bất kì để giao $Q$ nhiệm vụ cho mọi người trong hai dãy nhà đó thực hiện. Nhưng vì mỗi dãy nhà sẽ có số lượng người dân khác nhau nên không thể giao cùng số lượng nhiệm vụ được. Thay vào đó để công bằng hơn ngài quyết định số lượng nhiệm vụ sẽ là $2$ lần số trung vị của dãy số được kết hợp từ hai dãy nhà được chọn.

Bạn được ngài thị trưởng tin tưởng giao cho danh sách $W$ tuần đó. Bạn hãy tìm số lượng nhiệm vụ $Q$ cần thiết phải giao từng tuần.

## Dữ liệu vào:
- Dòng đầu tiên gồm hai số nguyên dương $N$ và $W$ lần lượt là số lượng dãy nhà hiện đang có trong thành phố và danh sách số tuần của kế hoạch.
- $N$ dòng tiếp theo mỗi dòng gồm một số $R$ và $R$ số tự nhiên đã được sắp xếp, số thứ $i$ đại diện cho số lượng người dân đang ở trong tòa nhà thứ $i$
- $W$ dòng tiếp theo mỗi dòng gồm hai số tự nhiên $U$ và $V$ là dãy nhà thứ $U$ và $V$.

## Dữ liệu ra:
- Gồm $W$ dòng, mỗi dòng là số lượng nhiệm vụ cần giao trong tuần đó.

## Ví dụ: 
### Dữ liệu vào:
```
5 3
2 1 3 
1 2
2 1 2
2 3 4
6 1 1 1 1 3 5
1 2
3 4
1 5
```

### Dữ liệu ra:
```
4
5
2
```

## Giới hạn:
- $1 ≤ N ≤ 1000, 1 ≤ A_{ij} ≤ 10^9,  1 ≤ R ≤ 2000$
- $50\%$ số test có $W ≤ 1000$
- $50\%$ số test khác có $W ≤ 10^5$
