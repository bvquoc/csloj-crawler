Kenny Sang là một người rất sang chảnh, anh có một dãy số độ dài $N$ gồm $N$ số tự nhiên phân biệt để thể hiện độ quý tộc của mình. Để đảm bảo tính an toàn, Kenny đã copy dãy số này thành M bản. Quân là một người vô cùng ghen ghét với vẻ đẹp của Kenny, vì vậy, Quân quyết định phá hoại dãy số này của Kenny bằng cách, đột nhập và lấy tất cả các dãy số của Kenny, với mỗi dãy số, Quân xóa đi một số phần tử nào đó và giữ nguyên thứ tự của các phần tử còn lại.

Ba Kenny từ Mỹ về, và đã phát hiện ra âm mưu này, tuy nhiên, mọi chuyện đã quá muộn. Do $N$ quá lớn, Kenny không thể ghi nhớ hết được toàn bộ dãy số của mình. Từ $M$ dãy số đã bị phá hoại của mình, Kenny muốn xây dựng lại dãy số ban đầu của mình. Do có nhiều khả năng có thể xảy ra, Kenny sẽ lấy khả năng có $N$ là nhỏ nhất, nếu vẫn có nhiều kết quả, lấy dãy có thứ tự từ điển nhỏ nhất. 

## Dữ liệu vào:
- Dòng đầu tiên là số nguyên dương $M\ (1≤M≤1000)$;
- Tiếp theo đó là $M$ khối dữ liệu, khối dữ liệu thứ i bắt đầu bằng số nguyên $K$ là độ dài còn lại của dãy copy thứ $i$, tiếp sau đó là $K$ số thể hiện các số còn lại của dãy copy đó. ($0≤k≤1000$, các giá trị trong đoạn $[1,10^6]$).

## Dữ liệu ra:
- Dãy số nguyên bản ban đầu. 

## Ví dụ:
### Dữ liệu vào:
```
2
2
1 3
3
2 3 4
```

### Dữ liệu ra:
```
1 2 3 4
```