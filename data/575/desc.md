Có một số con Rô-bốt xây nhà trên một mảnh đất hình vuông, mảnh đất đó được chia thành lưới ô vuông đơn vị kích thước $n×n$. Vì Rô-bốt được lập trình xây nhà khá máy móc, nên hai ngôi nhà do cùng một con Rô-bốt xây nên sẽ có kích thước và hình dạng đáy giống hệt nhau (Có thể đặt chồng khít lên nhau qua một phép dời hình), hai ngôi nhà do hai con Rô-bốt khác nhau xây nên thì có ít nhất một ô khác nhau.

Khi công trình hoàn thành, các ngôi nhà được xây hoàn toàn tách biệt (không có hai ngôi nhà nào chung ô, chung tường, nhưng có thể chung góc tường). Bản đồ của khu đất đã được chụp ảnh và mã hoá dưới dạng một ma trận vuông $A$ kích thước $n×n$, trong đó $a_{ij} = 1$ cho biết ô $(i, j)$ của mảnh đất thuộc một ngôi nhà nào đó còn $a_{ij} = 0$ cho biết ô $(i, j)$ của mảnh đất vẫn còn để trống.
<center><img src="/images/problems/575/HOUSE.svg" width="350px" /></center>

Vấn đề đặt ra là khi có bản đồ khu nhà trong tay, hãy xác định số con rô bốt tham gia xây nhà và chỉ rõ con rô bốt nào xây ngôi nhà nào.

## Dữ liệu vào:
- Dòng đầu ghi số nguyên dương $n\ (n ≤ 100)$.
- $n$ dòng tiếp theo, dòng thứ $i$ ghi $n$ số, số thứ $j$ là $a_{ij}$.

## Dữ liệu ra:
- Ghi số con rô-bốt tham gia xây nhà.

## Ví dụ:
### Dữ liệu vào:
```
9
1 1 1 0 1 0 0 0 1
1 0 0 0 1 1 0 1 1
1 1 0 0 0 0 0 0 0
1 0 0 1 0 0 0 0 0
1 0 0 1 0 0 0 0 0
0 0 1 1 0 1 0 0 0
1 0 0 0 0 1 0 0 1
1 0 1 0 0 1 1 0 1
1 1 1 1 1 0 0 1 1
```

### Dữ liệu ra:
```
4
```